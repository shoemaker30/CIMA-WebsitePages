function updatePosition(){
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      function success(pos) {
          var lat = pos.coords.latitude;
          var lon = pos.coords.longitude;
          getLocationDetails(lat,lon); 
          centerMap(lat,lon);
          moveMarker(lat,lon, "You are here.");
          setCoords(lat,lon);
      }
      function error(err) {
        document.getElementById('error-message').display="inline";
      }
      navigator.geolocation.getCurrentPosition(success, error, options);

}
function centerMap(latitude, longitude){
    map.setView([latitude, longitude], 15); 
}
function moveMarker(latitude, longitude, popupMessage){
    marker = L.marker([latitude,longitude]).addTo(map);
    marker.bindPopup(popupMessage).openPopup();
}
async function getLocationDetails(latitude, longitude){
    await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+
        latitude+'&longitude='+longitude+'&localityLanguage=en')
            .then((response) => response.json())
            .then((location) => {

                console.log(location);

                var zip = location.postcode;
                var city = location.localityInfo.administrative[3].name;
                var county = location.localityInfo.administrative[2].name;
                var state = location.localityInfo.administrative[1].name;
                
                document.getElementById('location-details').innerHTML = `
                    <p>City: <b>`+city+`</b></p>
                    <p>Country: <b>`+county+`</b></p>
                    <p>State: <b>`+state+`</b></p>
                `;

                surveyAnswers.zipCode = zip;
                surveyAnswers.city = city;
                surveyAnswers.county = county;
                surveyAnswers.state = state;
            });
}

//greys out and disables buttons so users cannot advance before answering current question
//applies to all next buttons
function disableNextButton(){
    var nextButtons = document.getElementsByName('next-button');
    nextButtons.forEach(button => button.disabled=true);
    nextButtons.forEach(button => button.className='next-button disabled');
}
//gives button a color and allows it to be clickable after user has answered current question
//applies to all next buttons
function enableNextButton(){
    var nextButtons = document.getElementsByName('next-button');
    nextButtons.forEach(button => button.disabled=false);
    nextButtons.forEach(button => button.className='next-button enabled');
}
//fills the invisible text inputs with the latitude and longitude selected
function setCoords(latitude, longitude){
    surveyAnswers.latitude = latitude;
    surveyAnswers.longitude = longitude;
    enableNextButton();
}


/* 
 * These functions occur when the user answers a question.
 * They save the answer into the surveyAnswers array and call the function to go to the next question
 */
function setCategory(category){
    surveyAnswers.category = category;
    console.log(surveyAnswers);
    gotoPrimaryIssueQuestion(category);
}
function setPrimaryIssue(issue){
    surveyAnswers.primaryIssue = issue;
    console.log(surveyAnswers);
    gotoDescriptionQuestion();
}
function setDescription(){
    surveyAnswers.description=document.getElementById('description-textbox').value;
    console.log(surveyAnswers);
    submitReport();
}

/* 
 * These functions are for transitioning to the next question. 
 * They hide the current question, call the necessary funtions to generate the next question, and then show that question
 */
function gotoImageQuestion(){
    document.getElementById('map-question').style.display="none";
    disableNextButton();
    document.getElementById('image-question').style.display="inline";
    document.getElementById('image-question').style.height="auto";
}
function gotoCategoryQuestion(){
    document.getElementById('image-question').style.display="none";
    generateCategoryQuestion();
    document.getElementById('category-question').style.display="inline";
    document.getElementById('category-question').style.height="auto";
}
function gotoPrimaryIssueQuestion(category){
    document.getElementById('category-question').style.display="none";
    generatePrimaryIssueQuestion(category);
    document.getElementById('primary-issue-question').style.height = 'auto';
}
function gotoDescriptionQuestion(){
    document.getElementById('category-question').style.display="none";
    document.getElementById('primary-issue-question').style.display="none";
    document.getElementById('description-question').style.display="inline";
}


//this funtion is hardcoded for now so that icons can be used
function generateCategoryQuestion(){
    var categoryQuestion = `
        <div class="row">
            <div class="column half question">
                <h1>What are you reporting about today?</h1>
                <p>Let us know what your reporting about. This will help categorize your report and to create a timeline of the reports.</p>
            </div>
            <div class="column fourth">
                
                    <button class="category-option" type="button" onClick="setCategory('Sign/Signal')"><i class="fas fa-traffic-light"></i></br>Sign/Signal</button>
                </br>
                    <button class="category-option" type="button" onClick="setCategory('Sidewalk')"><i class="fas fa-biking"></i></br>Sidewalk/Walking Trail</button>
                </br>
                    <button class="category-option" type="button" onClick="setCategory('Parking Lot/Garage')"><i class="fas fa-parking"></i></br>Parking Lot/Garage</button>
            </div>
            <div class="column fourth">
                    <button class="category-option" type="button" onClick="setCategory('Building')"><i class="fas fa-city"></i></br>Building</button>
                </br>
                    <button class="category-option" type="button" onClick="setCategory('Pedestrian Bridge')"><i class="fas fa-walking"></i></br>Pedestrian Bridge</button>
                </br>
                    <button class="category-option" type="button" onClick="setCategory('Roadway')"><i class="fas fa-road"></i></br>Roadway</button>
            </div>
        </div>
        <div class="row single">
            <a class="category-other" onClick="setCategory('Other')">Report about something else --></a>
        </div>
    `;
    document.getElementById('category-question').innerHTML = categoryQuestion;
}
//uses the survey tree to display a question based on the given category
function generatePrimaryIssueQuestion(category){
    var buttons = "";
    for(var i=0; i<tree.survey.length; i++){
        //if the user chose other, then skip generating this question and go to the next one
        if(tree.survey[i].object_type == 'Other'){
            gotoDescriptionQuestion();
            return;
        }
        else if(tree.survey[i].object_type == category){
            tree.survey[i].details.forEach(issue => buttons=buttons + 
            `<button class="issue-option" type="button" onClick="setPrimaryIssue('`+issue.primary_issue+`')"></br>`+issue.primary_issue+`</button>`);
            break;
        }
    }
    var primaryIssueQuestion = `
        <div class="row">
            <div class="column half question">
                <h1>What is the issue regarding the `+category+`?</h1>
                <p>Each report focuses on one of these issues. I multiple of these options are relevant, please submit your issues in multiple reports.</p>
            </div>
            <div class="column half">`
            +buttons+
            `</div>
        </div>
    `;
    document.getElementById('primary-issue-question').innerHTML = primaryIssueQuestion;
}

function onTextChange(){
    var remainingChars = CHAR_LIMIT - document.getElementById('description-textbox').value.length;
    console.log(remainingChars);
    document.getElementById('chars-remaining-message').innerHTML = remainingChars+" Characters Remaining";
}
function onFileInput(){
    const fileInput = document.getElementById('file-input');
    var imageFile = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('submitted-photo').src = e.target.result;
    }
    reader.readAsDataURL(imageFile);
    enableNextButton();
}

async function submitReport(){

    document.getElementById('description-question').style.display = "none";
    var url = 'http://localhost:3000/submit-report?latitude=' + surveyAnswers.latitude +
        '&longitude=' + surveyAnswers.longitude +
        '&primary_issue=' + surveyAnswers.primaryIssue +
        '&description=' + surveyAnswers.description;

    const options = {
        method:'GET',
        mode: 'no-cors'
    };
    fetch(url,options)
        .then(response =>{
             console.log(response);
             window.location.replace('./report-submission.php');
        });

    
}




disableNextButton();

const map = L.map('map');
 // Get the tile layer from OpenStreetMaps 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 

    // Specify the maximum zoom of the map 
    maxZoom: 25, 

    // Set the attribution for OpenStreetMaps 
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

var surveyAnswers = {
    latitude:null,
    longitude:null,
    city:null,
    zipCode:null,
    primaryIssue:null,
    specificIssue:null,
    description:null
}


const CHAR_LIMIT = 300;

updatePosition();





