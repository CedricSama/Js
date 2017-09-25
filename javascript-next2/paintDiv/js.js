var ecran = document.querySelector(".ecran");
var pressed = false,taille=document.getElementById("TailleSelect").value,forme = "rond",dessin=true, pipedColor;
var cursor = document.getElementById("cursor");
ecran.addEventListener('mousedown', function (e) {
    pressed = true;
});
ecran.addEventListener('mouseup', function (e) {
    pressed = false;
});
ecran.addEventListener('mousemove', function (e) {
    if (pressed) {
        // console.log("x : "+e.clientX, "Y"+e.clientY, 'event ',e , "BGcolor"+document.getElementById("colorInput").value);
        drawPix(e.clientX,e.clientY);
    }

    cursor.style.top = (e.clientY-50)+"px";
    cursor.style.left= (e.clientX-50)+"px";
    cursor.style.position = 'absolute';
});
ecran.addEventListener('click', function (e) {
        drawPix(e.clientX,e.clientY);
});
document.getElementById("TailleSelect").addEventListener("change",function(){
    taille = this.value;
});
document.getElementById("FormSelect").addEventListener("change",function(){
    forme = this.value;
    if(forme=="carre"){
        cursor.style.borderRadius = 0;
    }else
    cursor.style.borderRadius = '50%';


});

function drawPix(x,y){
    var color = document.getElementById("colorInput").value;
    var pix = document.createElement("div");
    pix.style.height = taille+'px';
    pix.style.width = taille+'px';
   if(dessin) pix.style.backgroundColor = color;
   else pix.style.backgroundColor = "white";
    pix.style.top = y+"px";
    pix.style.left= x+"px";
    pix.style.position = 'absolute';
    pix.addEventListener('click',function(){
        pipedColor = this.style.backgroundColor;
        console.log({'p':pipedColor})
    });
    if(forme=="carre"){
        pix.style.borderRadius = "0";
    }else{
        pix.style.borderRadius = "50%";
    }
    ecran.appendChild(pix);
}



document.getElementById("crayon").addEventListener('click',function(){
    dessin = true;
    ecran.style.cursor = 'url(\'spray.png\'),default';
});
document.getElementById("gomme").addEventListener('click',function(){
    dessin=false;
    ecran.style.cursor = "url('eraser.png'),default";
});
document.getElementById("clear").addEventListener('click',function(){
    dessin=true;
    ecran.style.cursor = 'url(\'spray.png\'),default';
    ecran.innerHTML="";
});


document.getElementById("pipette").addEventListener('click',function(){
    ecran.removeEventListener('click');



    ecran.addEventListener('click', function (e) {
        drawPix(e.clientX,e.clientY);
    });
    console.log("#"+toHex(parseInt(pipedColor.substr(4,3)))+toHex(parseInt(pipedColor.substr(pipedColor.indexOf(',')+2,3)))+
        toHex(parseInt(pipedColor.substr(pipedColor.lastIndexOf(',')+2,3))));

    function toHex(n) {
        var hex = n.toString(16);
        while (hex.length < 2) {hex = "0" + hex; }
        return hex;
    }


    document.getElementById("colorInput").value ="#"+toHex(parseInt(pipedColor.substr(4,3)))+toHex(parseInt(pipedColor.substr(pipedColor.indexOf(',')+2,3)))+
        toHex(parseInt(pipedColor.substr(pipedColor.lastIndexOf(',')+2,3)));
});