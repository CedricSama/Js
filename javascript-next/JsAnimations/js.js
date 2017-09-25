/**
 * Created by stagiaire on 21/08/2017.
 */
window.addEventListener('load',function(){
var nbExe = 10;

    console.time("nomUnique");
    function test(){
        console.log("Function executed"+nbExe);
        var retour = setTimeout(test,1000);
        console.log(retour);
        nbExe--;
        if(nbExe==0){
            clearTimeout(retour);
            console.timeEnd("nomUnique");
        }
    }
    // test();
    function test2() {
        console.log("Function executed"+nbExe);
        nbExe--;
        if(nbExe==0){
            clearInterval(retour2);
            console.timeEnd("nomUnique");
        }
    }
    // var retour2 =  setInterval(test2,1000);
    var LeftID,DownID,RightID,UpID;
    var left = 300;
    var top = 0;
    var angle = 0;
    var nextStep="left";
    var div  = document.querySelector('.anime');
    div.style.position="absolute";
    div.style.top = top;
    div.style.left = left+"px";
    // var IntervalTrigger = setInterval(frames,5);
    var IntervalTriggerRotate = setInterval(rotate,5);
    function frameLeft() {
        left--;
        div.style.left = left+"px";
        if(left == 0){
            nextStep = "down";
            // DownID =  setInterval(frameDown,5);
            IntervalTriggerRotate = setInterval(rotate,5);
            clearInterval(LeftID);
        }
    }
    function frameDown() {
        top++;
        div.style.top= top+"px";
        if(top == 300){
            nextStep = "right";
            // RightID = setInterval(frameRight,5);
            IntervalTriggerRotate = setInterval(rotate,5);
            clearInterval(DownID);
        }
    }
    function frameRight() {
        left++;
        div.style.left = left+"px";
        if(left == 300){
            nextStep = "top";
            // UpID =  setInterval(frameUp,5);
            IntervalTriggerRotate = setInterval(rotate,5);
            clearInterval(RightID);
        }
    }

    function frameUp() {
        top--;
        div.style.top = top+"px";
        if(top == 0){
            nextStep = "left";
            // LeftID = setInterval(frameLeft,5);
            IntervalTriggerRotate = setInterval(rotate,5);
            clearInterval(UpID);
        }
    }


    // function frames(){
    //     if(left>=0){
    //         if(top == 300){
    //              console.log(left)
    //         }else{
    //             top++
    //             div.style.top=top+"px";
    //         }
    //     }else{
    //         if(top==0){
    //             left--;
    //             div.style.left = left+"px";
    //         }else{
    //             left++;
    //             div.style.left = left+"px";
    //             if(left == 300) clearInterval(IntervalTrigger);
    //         }
    //     }
    // }
    function rotate(){
        angle++;
        div.style.transform = "rotate("+angle+"deg)";
        if(angle==180){
            angle = 0;
            clearInterval(IntervalTriggerRotate);
            switch (nextStep){
                case "down" :
                    DownID =  setInterval(frameDown,5);
                    break;
                case "right" :
                    RightID = setInterval(frameRight,5);
                    break;
                case "top" :
                    UpID =  setInterval(frameUp,5);
                    break;
                case "left" :
                    LeftID = setInterval(frameLeft,5);
                    break;
            }
        }
    }
});