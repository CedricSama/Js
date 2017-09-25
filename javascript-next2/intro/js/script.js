//LA CONSOLE
console.log('Loaded', 'second');//Affiche les paramaitres dans la console

//Variables
chaine = "YO!";
var chaineSimpleCote = 'Ma chaine avec des cotes simples';
var chaine2 = "Aujourd'hui"; // alterner double cotes et simples cotes pour ne pas avoir a proteger l'apostrophe
var chaine3 = 'Aujourd\'hui'; //carrachere d'echapement dans les chaines de carrachteres
var yo = [1, 2, 2];
console.log("Type of YO : " + typeof yo);
console.log("Valeur de YO : " + yo);
console.log(chaine + "\n\r", chaineSimpleCote, chaine2, chaine3 + "\n\r", yo);

//Methodes manipulation de tableau
var MyArray = new Array(1, 2, 3).concat([5]);
var indice = 3;
console.log("MyArray", MyArray[indice]);

var tab = [1, 2, 3].concat([4, 5, 06]);
console.log("tab", tab);


//Declaration Function sans params
function NomDeLaFunction() {
    console.log("Dans la function" + chaineSimpleCote);
}
//appel de la function
NomDeLaFunction();


function Somme(param1, param2) {
    var s;
    s = param1 + param2;
    return s;
}


var s2 = Somme(1, 2);
console.log(s2); // log de la variable contenant le retours de la function
console.log(Somme(5, 2)); // log du retour de la function
console.log(Somme(Somme(1, 2), Somme(7, 3))); //utilisation de la function en paramaitre


function Extraparams() {
    // console.log(arguments.toString())
    console.log("Arguments : ", arguments);
}


Extraparams(1);
Extraparams(1, 2);
Extraparams(1, 2, 3);


function Sum() {
    // console.log(this, typeof this);
    var i, somme = 0;
    for (i = 0; i < arguments.length; i++) {
        somme += arguments[i]; // equivalent somme = somme+ arguments[i];
    }
    return somme;
}


console.log(Sum(Sum(1, 2, 3, 4, 5), Sum(11, 28, 3, 4, 5), 3));
console.log(Sum(1, 2, 3, 4, 5));


console.log(window);

//Arrays
var tab = new Array(); //Declaration avec new
var tab2 = []; // declaration avec []
tab[0] = "val"; // Affectation simple
tab2.push(tab[0]); // ajout de valeur avec la methode push du tableau
tab[1] = 34; // cellule de lableaux remplie avec une valeur numerique
tab[2] = [3, 2, 1];  // cellule contenant un autre tableau
tab[3] = {
    'prop': 3,
    'prop2': "chaine",
    'prop3': [1, 2, 3],
    methode:function(){
        alert(this.prop)
    }
}; // cellule contenant un OBJECT JSON

//Log des deux tableaux
console.log(tab);
console.log(tab2);


//OBJECT JSON
//Vide
var Obj = {}; //declaration d'un object JSON vide
var Obj2 = {
    prop: "toto",
    prop2: 12,
    prop3: [1, 2, 3],
    prop4: "toto",
    methode: function () {
        console.log("Obj2", this)
    },
    methode2: function () {
        console.log("Obj2", this)
    }
}; //declaration d'un object JSON avec des proprietes
Obj.nomPropriete = "Valeur"; //creation dynamique d'une propriete
Obj.methode = function () {
    console.log("Obj", this);
};
Obj2.prop = "titi";
Obj.methode(); // L'object this dans cette appel est l'object lui meme
console.log(Obj2);


// console.log(Obj, typeof Obj);


var prsonne = {
    nom: 'hassani',
    prenom: 'ayoub',
    age: 12,
    tel: [{
        libelle: "perso",
        num: '000000000'
    }, {
        libelle: "pro",
        num: '060000000'
    }],
    adress: {
        line1: "12 rue Amelie",
        line2: "",
        cp: 75007,
        ville: 'Paris'
    }
};

prsonne.age = 25; //modification de l'age'
prsonne.age += 5; //on Ajout 5 ans a l'age
prsonne.tel[0].num = "0783385221"; //modification du telephone perso
prsonne.tel[1].num = "0783385221";//modification du telephone pro

var formattedChaine = "Mr " + prsonne.nom + " Habite au : \n\r" + prsonne.adress.line1 + " " +
    prsonne.adress.line2 + " \n\r" + prsonne.adress.cp + " " + prsonne.adress.ville;

console.log(formattedChaine);
document.body.innerHTML += formattedChaine;


personneList = [
    {
        nom: "titi94",
        prenom: "thierry"
    }, {
        nom: "Cedric",
        prenom: "toto"
    }, {
        nom: "Michael",
        prenom: "titi"
    }, {
        nom: "Michael",
        prenom: "titi"
    }
];
function toto() {
    for (var i = 0; i < personneList.length; i++) {
        console.log(personneList[i].nom + "a la position " + i);
    }
}
toto();


var tab3 = [3, 2, 1];
//boucle d'initalisation de 10  valeurs dans 10 cellules allant de 0 a 9
for (var i = 0; i < 10; i++) {
    tab3[i] = i;
    //tab3.push(i);
}
//une autre boucle ou on multiplie chaque valeur *2
for (var i = 0; i < tab3.length; i++) {
    tab3[i] *= 2;// tab3[i]=tab3[i]*2;
}
//log le tab3 (reultat)
console.log(tab3);

var madiv = document.getElementById('div1');
madiv.style.backgroundColor = "yellow";
madiv.onclick = function () {
    var color = madiv.style.backgroundColor;
    madiv.style.backgroundColor = (color === "yellow") ? "red" : "yellow";

    // if(color=="yellow"){
    //     madiv.style.backgroundColor = "red";
    // }
    // else madiv.style.backgroundColor = "yellow";

}

madiv.classList.remove('123');
madiv.classList.add('NewFromJavascript');
madiv.innerHTML += "1+1";
eval("var testJammais = 1+1");
alert(testJammais);
console.log({"madiv-Javascript": madiv});

























