// javascript for mobile layout responsive drop down

function access_mobile_nav_bar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav" ) {
        x.className += " responsive sticky";
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

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

/* 
 * Fix for bug where mobile layout unstickied is behind the content,
 * attempted modifying z-index to no avail with css. So instead, our
 * hack is to do nothing if the navbar is "topnav responsive sticky"
*/
function list_includes_topnav_responsive_sticky(navbarlist) {
    if (contains(navbarlist, "topnav") != true) {
	return false;
    }
    if (contains(navbarlist, "responsive") != true) {
	return false;
    }
    if (contains(navbarlist, "sticky") != true) {
	return false;
    }
    return true;
}
