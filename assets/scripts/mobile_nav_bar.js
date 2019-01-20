// javascript for mobile layout responsive drop down

function access_mobile_nav_bar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav" ) {
        x.className += " responsive";
    } else if (x.className === "topnav sticky") {
        x.className += " responsive";
    } else { // reset back to topnav
        x.className = "topnav";
    }
    scroll_sticky_nav_bar();
}

function show_mobile_element(var_id) {
    var x = document.getElementById(var_id);
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}