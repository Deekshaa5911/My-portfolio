

function myMenuFunction() {
    var menuBtn = document.getElementById("mynavmenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineheight = "70px";
        }else{
            navHeader.style.boxShadow="none";
            navHeader.style.height = "90px";
            navHeader.style.lineheight = "90px";

        }
}

