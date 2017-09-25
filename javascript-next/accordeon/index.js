/**
 * Created by stagiaire on 16/08/2017.
 */


var titlesList = document.querySelectorAll(".accordeon h2");
var AccordeonBodiesList = document.querySelectorAll(".accordeon div");

titlesList[0].classList.add("active");
 AccordeonBodiesList[0].classList.add("visible");
// AccordeonBodiesList[0].style.height="100px";

for(var i =0; i<titlesList.length;i++){
    titlesList[i].addEventListener('click',function(){
        var h2Active = document.querySelector(".accordeon h2.active")
        h2Active.classList.remove("active");
        h2Active.nextElementSibling.classList.remove("visible");
        // h2Active.nextElementSibling.style.height=0;
        // h2Active.nextElementSibling.style.opacity=0;
        this.classList.add("active");
        this.nextElementSibling.classList.add("visible");
        //
        // this.nextElementSibling.style.height="100px";
        // this.nextElementSibling.style.transition='2.5s';
        // this.nextElementSibling.style.opacity=1;
    });
}
console.log(AccordeonBodiesList);