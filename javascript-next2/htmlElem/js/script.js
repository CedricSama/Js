
// console.log('Loaded');
// var IDELEM = document.getElementById('IDELEM');
// console.log("IDELEM :: ", IDELEM);
// var CLASSNAME = document.getElementsByClassName("CLASSNAME");
// console.log(CLASSNAME);
//
// var CLASSNAME2 = document.getElementsByClassName("CLASSNAME classname2");
// console.log({'a': CLASSNAME2});
//
// var doubleCLASSNAME = document.querySelector(".CLASSNAME.classname2");
// console.log(doubleCLASSNAME);
// console.log(document.body)
// var queryext = "body > div :not(:nth-child(2))";
// function getQuery(){
//     var query = "body > div > p";
//     return query;
// }
//
// var paragraph = document.querySelectorAll(getQuery());
// console.log(paragraph);
//
// var paragraph2 = document.querySelectorAll(queryext);
// console.log(paragraph2);
//


var doubleCLASSNAME = document.querySelector(".CLASSNAME.classname2");
doubleCLASSNAME.lastElementChild.addEventListener('click',function(){
    (this.innerHTML == "test")? this.innerHTML= "I'm clicked": this.innerHTML= "test";

     this.innerHTML= (this.innerHTML == "test")? "I'm clicked": "test";

    if(this.innerHTML == "I'm clicked"){
        this.innerHTML = "test"
    }else{
        this.innerHTML = "I'm clicked"
    }
})
console.log(doubleCLASSNAME.firstChild)
console.log(doubleCLASSNAME.firstElementChild)
doubleCLASSNAME.firstElementChild.innerHTML = "du text dans L'element p";
doubleCLASSNAME.firstElementChild.nextElementSibling.style.backgroundColor="red";
doubleCLASSNAME.firstElementChild.childNodes[0].nodeValue = 'New Text with Node Value';
console.log({'p':doubleCLASSNAME.children[0].childNodes[0]});

// document.body.appendChild(divNew)
console.log({
    "div":doubleCLASSNAME
});
console.log({
    "body":document.body
})