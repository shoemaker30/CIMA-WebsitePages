function updatePosition(){
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      function success(pos) {
          var lat = pos.coords.latitude;
          var lon = pos.coords.longitude;
          centerMap(lat,lon);
          moveMarker(lat,lon);
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
function moveMarker(latitude, longitude){
    marker = L.marker([latitude,longitude]).addTo(map);
        
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
    //disableNextButton();
    document.getElementById('image-question').style.display="inline";
}
function gotoCategoryQuestion(){
    document.getElementById('image-question').style.display="none";
    generateCategoryQuestion();
    document.getElementById('category-question').style.display="inline";
}
function gotoPrimaryIssueQuestion(category){
    document.getElementById('category-question').style.display="none";
    generatePrimaryIssueQuestion(category);
    document.getElementById('primary-issue-question').style.display="inline";
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
                <p>Let us know what your reporting about, and we will use that and the picture to create your report</p>
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
                    <button class="category-option" type="button" onClick="setCategory('Pedestrian Bridge')"></br>Pedestrian Bridge</button>
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
                <p></p>
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

async function submitReport(){
    
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


gotoImageQuestion();
gotoCategoryQuestion();
//gotoPrimaryIssueQuestion();



