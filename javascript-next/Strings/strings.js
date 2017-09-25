/**
 * @class Str
 * Manipulation de chaine de carracteres
 */
var Str = Str||{};
Str.input="Chaine de carrachere string";
Str.arr =["a",'no','yes','test',"aujourd'hui","z9","3"];
Str.methode=function(){
    //instructions dans la methode
    //this = Str
    console.log(this.input);
    console.log(Str.input);
}
Str.trieTab  = function(tabparam) {
    var i, j, echangeur,tab= tabparam || Str.arr;
    for (i = tab.length - 1; i >= 1; i--) {
        for (j = 0; j <= i - 1; j++) {
            if (tab[j + 1] < tab[j]) {
                echangeur = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = echangeur
            }
        }
    }
    return tab;
}

document.body.innerHTML = Str.input.bold().concat("<br>").toLocaleLowerCase().repeat(10);
document.body.innerHTML += Str.input.big().concat("<br>").toLowerCase().replace("string","ayoub");
document.body.innerHTML += "New Chaine".big().concat("<br>");
document.body.innerHTML += Str.input.concat(" avec Concat").search("avec")+" "+Str.input.length;
document.body.innerHTML += Str.input.link("http://google.fr");
console.log("match : ",Str.input.search(new  RegExp("(e)") ) );
var date = "12/07/2014";

console.log(date.substr(0,date.indexOf('/')));
console.log(date.substr(date.indexOf('/')+1,2));
console.log(date.substr(date.lastIndexOf('/')+1,4));
console.log(String.fromCharCode(65,67,72));
console.log(date.substring(0,date.indexOf('/')));
console.log(date.substring(date.indexOf('/')+1,date.lastIndexOf('/')));
console.log(date.substring(date.lastIndexOf('/')+1,date.length));




var date2 = "12/14/2015/13/02/2035";
console.log(date2.split("/"));

// console.log(date2.substring(0,date2.indexOf('/')));
// date2 = date2.substring(date2.indexOf('/')+1,date2.length);
//
// console.log(date2.substring(0,date2.indexOf('/')));
// date2 = date2.substring(date2.indexOf('/')+1,date2.length)
// console.log(date2.substring(0,date2.indexOf('/')));
// date2 = date2.substring(date2.indexOf('/')+1,date2.length)
// console.log(date2.substring(0,date2.indexOf('/')));
// date2 = date2.substring(date2.indexOf('/')+1,date2.length)
// console.log(date2.substring(0,date2.indexOf('/')));
// //date2 = date2.substring(date2.indexOf('/')+1,date2.length)
// console.log(date2.substring(date2.indexOf('/')+1,date2.length));
//



var str = 'abcdefghij';

// console.log('(1, 2): ' + str.substr(1, 2));     // '(1, 2): bc'
// console.log('(-3, 2): ' + str.substr(-3, 2));   // '(-3, 2): hi'
// console.log('(-3): ' + str.substr(-3));         // '(-3): hij'
// console.log('(1): ' + str.substr(1));           // '(1): bcdefghij'
// console.log('(-11, 2): ' + str.substr(-11, 2)); // '(-20, 2): ab'
// console.log('(20, 2): ' + str.substr(20, 2));   // '(20, 2): '


console.log(Str.input.startsWith("hain",1));
console.log(Str.input.endsWith("h",2));
console.log(Str.input.includes("de ",Str.input.indexOf("de")));
console.log("str.charAt : "+str.charAt(5));
console.log("str.charCodeAt : É☺☻♥♦♣♠"+str.charCodeAt(5));












