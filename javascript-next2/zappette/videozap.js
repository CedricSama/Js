var Myi=0;
window.addEventListener('load',function(){
    var button,iframe,liList;

    iframe = document.getElementsByTagName("iframe")[0];
    button= document.getElementsByTagName("button")[0];
    liList = document.querySelectorAll("body ul li");
    document.querySelector("ul").style.display="none";
    button.addEventListener('click',function(){
        // ici le script a executer a chaque click
        iframe.src = liList[Myi].innerHTML;
        Myi++;
    });
    iframe.addEventListener('load',function(){
        alert("Fin de chargement du "+this.src+" bonne video");
    })
});
console.log('Script loaded');