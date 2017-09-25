/**
 * Created by stagiaire on 21/08/2017.
 */
window.addEventListener('load', function () {
    var coef = (window.innerWidth+200) / (window.innerHeight);
    var TopLeftDiv = document.querySelector(".topleft"), TopLeftDivTop =0 , TopLeftDivLeft = 0;
    var TopRightDiv = document.querySelector(".topright"), TopRightDivTop = 0, TopRightDivRight = 0;
    var bottomLeftDiv = document.querySelector(".bottomleft"), bottomLeftDivBottom = 0, bottomLeftDivLeft = 0;
    var bottomRightDiv = document.querySelector(".bottomright"), bottomRightDivBottom = 0, bottomRightDivRight = 0;
    var TopLeftToCenterInterval = setInterval(TopLeftToCenter, 5);
    var TopRightToCenterInterval = setInterval(TopRightToCenter, 5);
    var bottomLeftDivInterval = setInterval(bottomLeftDivToCenter, 5);
    var bottomRightDivInterval = setInterval(bottomRightDivToCenter, 5);

    function TopLeftToCenter() {
        TopLeftDivTop++;
        TopLeftDivLeft += 1 * coef;
        TopLeftDiv.style.top = TopLeftDivTop + "px";
        TopLeftDiv.style.left = TopLeftDivLeft + "px";
        if (TopLeftDivTop == parseInt((window.innerHeight -200)/ 2)) {
            clearInterval(TopLeftToCenterInterval);
            TopLeftToCenterInterval = setInterval(TopLeftFromCenter, 5);
        }
    }

    function TopLeftFromCenter() {
        TopLeftDivTop--;
        TopLeftDivLeft -= 1 * coef;
        TopLeftDiv.style.top = TopLeftDivTop + "px";
        TopLeftDiv.style.left = TopLeftDivLeft + "px";
        if (TopLeftDivTop == 0) {
            clearInterval(TopLeftToCenterInterval);
            TopLeftToCenterInterval = setInterval(TopLeftToCenter, 5);
        }
    }

    function TopRightToCenter() {
        TopRightDivTop++;
        TopRightDivRight += 1 * coef;
        TopRightDiv.style.top = TopRightDivTop + "px";
        TopRightDiv.style.right = TopRightDivRight + "px";
        if (TopRightDivTop == parseInt((window.innerHeight -200)/ 2)) {
            clearInterval(TopRightToCenterInterval);
            TopRightToCenterInterval = setInterval(TopRightFromCenter, 5);
        }
    }

    function TopRightFromCenter() {
        TopRightDivTop--;
        TopRightDivRight -= 1 * coef;
        TopRightDiv.style.top = TopRightDivTop + "px";
        TopRightDiv.style.right = TopRightDivRight + "px";
        if (TopRightDivTop == 0) {
            clearInterval(TopRightToCenterInterval);
            TopRightToCenterInterval = setInterval(TopRightToCenter, 5);
        }
    }

    function bottomLeftDivToCenter() {
        bottomLeftDivBottom++;
        bottomLeftDivLeft += 1 * coef;
        bottomLeftDiv.style.bottom = bottomLeftDivBottom + "px";
        bottomLeftDiv.style.left = bottomLeftDivLeft + "px";
        if (bottomLeftDivBottom == parseInt((window.innerHeight -200)/ 2)) {
            clearInterval(bottomLeftDivInterval);
            bottomLeftDivInterval = setInterval(bottomLeftDivFromCenter, 5);
        }
    }

    function bottomLeftDivFromCenter() {
        bottomLeftDivBottom--;
        bottomLeftDivLeft -= 1 * coef;
        bottomLeftDiv.style.bottom = bottomLeftDivBottom + "px";
        bottomLeftDiv.style.left = bottomLeftDivLeft + "px";
        if (bottomLeftDivBottom == 0) {
            clearInterval(bottomLeftDivInterval);
            bottomLeftDivInterval = setInterval(bottomLeftDivToCenter, 5);
        }
    }

    function bottomRightDivToCenter() {
        bottomRightDivBottom++;
        bottomRightDivRight += 1 * coef;
        bottomRightDiv.style.bottom = bottomRightDivBottom + "px";
        bottomRightDiv.style.right = bottomRightDivRight + "px";
        if (bottomRightDivBottom ==parseInt((window.innerHeight -200)/ 2)) {
            clearInterval(bottomRightDivInterval);
            bottomRightDivInterval = setInterval(bottomRightDivFromCenter, 5);
        }
    }

    function bottomRightDivFromCenter() {
        bottomRightDivBottom--;
        bottomRightDivRight -= 1 * coef;
        bottomRightDiv.style.bottom = bottomRightDivBottom + "px";
        bottomRightDiv.style.right = bottomRightDivRight + "px";
        if (bottomRightDivBottom == 0) {
            clearInterval(bottomRightDivInterval);
            bottomRightDivInterval = setInterval(bottomRightDivToCenter, 5);
        }
    }


});


window.addEventListener('n\'impo', function () {


    /*100px -> X*/
    /*window.innerHeight -> 100*/
    percentH =10000/Math.max( document.body.scrollHeight,window.innerHeight);
    percentW =10000/document.body.clientWidth;

    maxTop = (50 - percentH);
    maxBottom = (50 - percentW);
console.log(percentH ,Math.max( document.body.scrollHeight,window.innerHeight))

    var coef = (window.innerWidth + 200) / (window.innerHeight);
    var TopLeftDiv = document.querySelector(".topleft"), TopLeftDivTop = 0, TopLeftDivLeft = 0;
    var TopRightDiv = document.querySelector(".topright"), TopRightDivTop = 0, TopRightDivRight = 0;
    var bottomLeftDiv = document.querySelector(".bottomleft"), bottomLeftDivBottom = 0, bottomLeftDivLeft = 0;
    var bottomRightDiv = document.querySelector(".bottomright"), bottomRightDivBottom = 0, bottomRightDivRight = 0;
   var  TopLeftToCenterInterval = setInterval(TopLeftToCenter,10);
    function TopLeftToCenter() {
        TopLeftDivTop += 0.25;
        TopLeftDivLeft +=0.25;
        TopLeftDiv.style.top = TopLeftDivTop - percentH  + "%";
        TopLeftDiv.style.left = TopLeftDivLeft - percentW + "%";
        if (TopLeftDivTop >= 50) {
            clearInterval(TopLeftToCenterInterval);
            TopLeftToCenterInterval = setInterval(TopLeftFromCenter, 5);
        }

    }
    function TopLeftFromCenter() {
        TopLeftDivTop-=0.25;
        TopLeftDivLeft-=0.25;
        TopLeftDiv.style.top = TopLeftDivTop-percentH  + "%";
        TopLeftDiv.style.left = TopLeftDivLeft-percentW + "%";
        if (TopLeftDivTop <= percentH) {
            clearInterval(TopLeftToCenterInterval);
            TopLeftToCenterInterval = setInterval(TopLeftToCenter, 5);
        }

    }

    // TopLeftDiv.style.top = (50 - percentH)+"%";
    // TopLeftDiv.style.left = (50 - percentW)+"%";

    TopRightDiv.style.top = (50 - percentH)+"%";
    TopRightDiv.style.right = (50 - percentW)+"%";


    bottomLeftDiv.style.bottom = (50 - percentH)+"%";
    bottomLeftDiv.style.left = (50 - percentW)+"%";


    bottomRightDiv.style.bottom = (50 - percentH)+"%";
    bottomRightDiv.style.right = (50 - percentW)+"%";
});