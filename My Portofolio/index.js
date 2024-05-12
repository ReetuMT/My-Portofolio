
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    tablinks.forEach(function(tablink) {
        tablink.classList.remove("active-link");
    });
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove("active-tab");
    });
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}

