/**
 * Created by stagiaire on 24/08/2017.
 */
window.addEventListener('load', function () {
    var canvas = document.getElementById("canvas");
    if(!canvas){
        console.error("Impossible de recuperer le canvas");
        return;
    }
    var context  = canvas.getContext("2d");
    if(!context){
        console.error("Impossible de recuperer le context 2D du canvas");
        return;
    }
    context.beginPath();
    context.moveTo(300,0);
    context.lineTo(0,10);
    context.lineTo(300,300);
    context.lineTo(300,0);
    context.strokeStyle = "red"
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = "green"
    context.moveTo(300,300);
    context.lineTo(300,450);
    context.lineTo(450,450);
    context.lineTo(450,300);
    context.lineTo(300,300);
    context.stroke();
    context.closePath();

    context.strokeStyle = "green"
    context.fillStyle = "green"
    context.fillRect(300,300,-150,-150);        context.fillStyle = "red"
    context.fillRect(300,300,-150,150);
    context.strokeStyle = "red"
    context.strokeRect(300,300,150,-150);


    var  image = new Image();
    image.src = "../audioVideo/img/pict/img3.jpg";
    image.addEventListener('load',function(){
        context.drawImage(this,0,0,300,300, 10,10, 100,100);
    });


    context.fillStyle = "Black"
    context.font="10px Helvitica";
    context.fillText("Hello All",200,30);

});