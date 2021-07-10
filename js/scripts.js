
var nav = false;

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("ham2").style.margin = "0 0 6px 10px"
    document.getElementById("item1").style.padding = "20px 8px 20px 60px";
    document.getElementById("item1").style.opacity = "1";
    document.getElementById("item2").style.padding = "20px 8px 20px 60px";
    document.getElementById("item2").style.opacity = "1";
    document.getElementById("item3").style.padding = "20px 8px 20px 60px";
    document.getElementById("item3").style.opacity = "1";
    document.getElementById("item4").style.padding = "20px 8px 20px 60px";
    document.getElementById("item4").style.opacity = "1";
    document.getElementById("item5").style.padding = "20px 8px 20px 60px";
    document.getElementById("item5").style.opacity = "1";
    document.getElementById("sidenavDiv").style.height="500px"
    nav = true;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ham2").style.margin = "0 0 6px 0"
    document.getElementById("item1").style.padding = "20px 8px 20px 0px";
    document.getElementById("item1").style.opacity = "0";
    document.getElementById("item2").style.padding = "20px 8px 20px 0px";
    document.getElementById("item2").style.opacity = "0";
    document.getElementById("item3").style.padding = "20px 8px 20px 0px";
    document.getElementById("item3").style.opacity = "0";
    document.getElementById("item4").style.padding = "20px 8px 20px 0px";
    document.getElementById("item4").style.opacity = "0";
    document.getElementById("item5").style.padding = "20px 8px 20px 0px";
    document.getElementById("item5").style.opacity = "0";
    document.getElementById("sidenavDiv").style.height = "0"
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}


// function changeName(){
//     // let name = document.querySelectorAll(".nameC");
//     // for(i=0;i< name.length;i++){
//     //     name[i].style.animationPlaybackState = "running"
//     // }
//     document.getElementById("nyosh").style.animationName="display";
//     document.getElementById("nyosh").style.animation ="display 0.9s linear 0 1 forwards;";
// }

// function changeNameReverse(){
//     let name = document.querySelectorAll(".nameC");
//     for (i = 0; i < name.length; i++) {
//         name[i].style.animationName = "showMeReversed"
//         name[i].style.animationPlaybackState = "running"
//     }
// }
