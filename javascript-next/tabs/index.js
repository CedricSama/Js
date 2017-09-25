console.log(document.querySelectorAll("li[forIdElement^=tab]"))


var tabs = document.querySelectorAll('.tabs > ul > li');
tabs[0].classList.add("active");
var idDicCorrespondante = tabs[0].getAttribute('forIdElement');
var DicCorrespondante = document.getElementById(idDicCorrespondante );
DicCorrespondante.classList.add("visible");

for (var i = 0; i<tabs.length;i++){
    tabs[i].addEventListener('click',function(){
        var liActive = document.querySelector('.tabs > ul > li.active');
        liActive.classList.remove("active");
        var divaCacher = document.getElementById(liActive.getAttribute('forIdElement'));
        divaCacher.classList.remove("visible");
        this.classList.add("active");
        var divaAfficher = document.getElementById(this.getAttribute('forIdElement'));
        divaAfficher.classList.add("visible");
    });
}