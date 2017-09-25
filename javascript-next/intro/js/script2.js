// function test(){
var test = function() {
   // alert(test);
}
var test2 = test;

test2();

window.addEventListener('nom de l\'evenement',function(){

});



(function (width){
    document.body.style.height=width;
})("100%");





function fnavecparam(params){
    // var params = arguments[0];
    //sol 1
    var innerParam;
    if(params==undefined){innerParam = "valeur par default";}
    else {innerParam = params};
    //sol 2
    var innerParam=(params==undefined)?"valeur par default":params;
    //sol 3
    var innerParam = params||"valeur par default";
    console.log(innerParam);
    //Utilisation de innerParam comme paramaitre a la function
    switch (innerParam){
        case "1er cas":
            //lse instructions
            console.log("1er cas")
            break;
        case "2eme cas":
            //lse instructions
            console.log("2eme cas")
            break;
        default:
            //lse instructions si ni le cas 1 ni le cas 2
            console.log("default")
            break;
    }
}




var param_si_obligatoir= "toto";
fnavecparam(param_si_obligatoir)
fnavecparam("1er cas")
fnavecparam("2eme cas")



function Extraparams() {
    console.log("Arguments Extraparams : ", arguments);
}


Extraparams(1);
Extraparams(1, 2);
Extraparams(1, 2, 3, 5);

function innerArray(){
    console.log("je suis declanche depuis l'interrieur du tableau" )
}
tabFn = [innerArray,console.log,console.warn]
console.log("++++++++++++++++++++++++++++++"+typeof tabFn)

objFn = {
    "prop1":innerArray,
    "prop2":console.log,
    "prop3":console.warn,
}

tabFn[0]();
tabFn[1]("Log from inner********************************************");
tabFn[2]("Log from inner********************************************");

objFn.prop1();
objFn.prop2("Log from inner*********************OBJECT***********************");
objFn.prop3("Log from inner*********************OBJECT***********************");











///CONDITION ET OPERATOR