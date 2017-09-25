var request = new XMLHttpRequest();
request.open("GET", 'error.php');
request.send();

function readystatechange() {
    console.log("readystatechange  "+this.readyState);
    if(this.readyState==1){
        document.body.style.cursor='wait';
        console.log("Mask Chargement lancé");
    }
}
function OnLoadStart() {
    console.log("OnLoadStart  ");
    this.timedOut = false;
}
function OnProgress() {
    console.log("OnProgress ")
}
function OnLoadEnd() {
    // console.log(this.status);
    // console.log(this.statusText);
    console.log("OnLoadEnd ");

    //ici si traitement
    console.log("Mask Chargement arreté");
    document.body.style.cursor='inherit';
}
function OnLoad() {

    console.log("OnLoad "+this.readyState);
        eval('var rt2 = ' + this.responseText );
        var colorS = document.getElementById('color');
        document.getElementById('view').style.backgroundColor = rt2.data[0];
        for (var i = 0; i < rt2.data.length; i++) {
            var op = document.createElement('option');
            op.name = rt2.data[i];
            op.value = rt2.data[i];
            op.innerHTML = rt2.data[i];
            colorS.appendChild(op);
        }
        colorS.addEventListener('change',function(){
            var r = new XMLHttpRequest();
            r.open("POST","error.php");
            var dataToSend ={};
            dataToSend.colorName = this.value;
            dataToSend.NouvellePropriete = 'Autre valeur';
            dataToSend.ProObj = {"nom":'ayoub'};
            r.send(JSON.stringify(dataToSend));
            r.addEventListener('load',function(){
                document.getElementById('view').style.backgroundColor = r.responseText;
            });
        });
    console.log("Mask Chargement arreté");
}

function OnError() {
    console.error("OnError ");
}
function OnTimeOut() {
    this.timedOut = true;
    console.log("OnTimeOut ")
}
function aborted() {
    console.log("aborted request in step " + this.readyState);
}

request.addEventListener('loadstart', OnLoadStart);
request.addEventListener('progress', OnProgress);
request.addEventListener('load', OnLoad);
request.addEventListener('loadend', OnLoadEnd);
request.addEventListener('abort', aborted);
request.addEventListener('error', OnError);
request.addEventListener('timeout', OnTimeOut);
request.addEventListener('readystatechange', readystatechange);




function OnLoadStart2() {
    console.log("OnLoadStart Async");
}
//
// var  r1 = new XMLHttpRequest();
// r1.open("GET", 'error.php',true);
// r1.addEventListener('loadend', function(){
//     var  r2 = new XMLHttpRequest();
//     r2.open("GET", 'error.php',true);
//     r2.addEventListener('loadstart', OnLoadStart2);
//     r2.send();
// });
// r1.send();










