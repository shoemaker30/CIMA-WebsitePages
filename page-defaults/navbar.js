//Credit to w3schools for this navbar design
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown

document.write(
    '<div class="topnav" id="myTopnav">'
+       '<a href="/CIMA-WebsitePages/" class="active">CIMA</a>'
+       '<div class="dropdown">'
+           '<button class="dropbtn">Services '
+               '<i class="fa fa-caret-down"></i>'
+           '</button>'
+           '<div class="dropdown-content">'
+               '<a href="/CIMA-WebsitePages/services/in-browser-reporting">In-Browser Reporting</a>'
+               '<a href="#">Mobile App</a>'
+               '<a href="#">View Nearby Hazards</a>'
+               '<a href="#">Cima for Municipalities</a>'
+               '<a href="#">API and Integrations</a>'
+           '</div>'
+       '</div> '
+       '<div class="dropdown">'
+           '<button class="dropbtn">Info '
+               '<i class="fa fa-caret-down"></i>'
+           '</button>'
+           '<div class="dropdown-content">'
+               '<a href="/CIMA-WebsitePages/info/about">About Us</a>'
+               '<a href="#">FAQ</a>'
+           '</div>'
+       '</div> '
+       '<div class="dropdown">'
+           '<button class="dropbtn">Contact '
+               '<i class="fa fa-caret-down"></i>'
+           '</button>'
+           '<div class="dropdown-content">'
+               '<a href="#">Site Messaging</a>'
+               '<a href="/CIMA-WebsitePages/contact">Meet the Team</a>'
+           '</div>'
+       '</div> '
+       '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="toggleNavbar()">&#9776;</a>'
+    '</div>'
//+    '<div id="myOverlay" class="nav-overlay"></div>'
+    '<div class="topnav-spacer"></div>'
);


function toggleNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    /*
    x = document.getElementById("myOverlay");
    if (x.className === "nav-overlay") {
        x.className += " active";
    } else {
        x.className = "nav-overlay";
    }*/
}

