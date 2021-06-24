//Credit to w3schools for this navbar design
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown

document.write(
    `<div class="topnav" id="myTopnav">
       <a href="/" class="active">CIMA</a>
       <div class="dropdown">
           <button class="dropbtn">Services 
               <i class="fa fa-caret-down"></i>
           </button>
           <div class="dropdown-content">
                <a href="/services/in-browser-reporting">In-Browser Reporting</a>
                <a href="/services/mobile-app">Mobile App</a>
                <a href="/services/nearby-hazards">View Nearby Hazards</a>
                <a href="/services/municipalities">Cima for Municipalities</a>
                <a href="/services/api">API and Integrations</a>
            </div>
        </div> 
        <div class="dropdown">
            <button class="dropbtn">Info 
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="/info/about">About Us</a>
                <a href="/info/faq">FAQ</a>
                <a href="/info/studies">Studies</a>
            </div>
        </div> 
        <a href="/contact">Contact Us</a>
        <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="toggleNavbar()">&#9776;</a>
    </div>
    <div class="topnav-spacer"></div>`
);


function toggleNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

