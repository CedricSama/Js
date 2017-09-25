/**
 * Created by stagiaire on 21/08/2017.
 */
//ES5
//DECLARATION ET CONSTRUCTEUR CLASS
function NOMDELACLASS() {
}
NOMDELACLASS.prototype.nomDeLaPropriete = "valeur";
NOMDELACLASS.prototype.methode = function () {
    this.nom = "NOMDELACLASS";
}

var Test = new NOMDELACLASS();
console.log(Test, typeof Test);


function Personne(a, b) {
    this.nom = a || "";
    this.prenom = b || "";
    this.age = 12;
}
//Heritage
Personne.prototype = new NOMDELACLASS();
Personne.prototype.quiSuije = function () {
    console.log("Mr : " + this.nom + " " + this.prenom + " Agé de : " + this.age + "Année(s)")
}
var p = new Personne('toto');
console.log(p, p.instanceName);
p.quiSuije();
p.methode();
p.quiSuije();


//ES6*
class Personne2 {

    constructor(a, b, c) {
        // let i = 0;
        this.nom = a;
        this.prenom = b;
        this.age = c;
        // {
        //     let i = 10;
        //     console.log('innerBlock : '+i);
        // }
        // console.log("outerBlock"+i);


    }


    setNom(n) {

        this.nom = n;
    }

    setPrenom(n) {
        this.prenom = n;
    }

    setAge(age) {
        this.age = age;
    }

    getNom(n) {
        return this.nom;
    }

    getPrenom() {
        //INSTRUCTIONS
        return this.prenom;
    }

    getAge(age) {
        return this.age;
    }

}

//heritage
class P3 extends Personne2 {
    constructor(a, b, c, d) {
        super(a, b, c);
        this.address = d || "";
    }

    getAddress() {
        return this.address;
    }

    setAddress(a) {
        this.address = a
    }
    salue(p){
        var salutation = 'Moi '+this.getNom()+" "+this.getPrenom();
        salutation +=", Je salue Mr "+p.getNom()+" "+p.getPrenom();
        console.log(salutation);
    }
    insulte(){
        var salutation = 'Moi '+this.getNom()+" "+this.getPrenom();
        salutation +=", J'insulte Mr "+arguments[0].getNom()+" "+arguments[0].getPrenom();
        salutation +=", et J'insulte Mr "+arguments[1].getNom()+" "+arguments[1].getPrenom();
        console.log(salutation);
    }

}
var  p3 = new P3();
p3.setNom("Hassani");
p3.setPrenom("Ayoub");
p3.setAge(12);
p3.setAddress("TEST ADRESS");

var p4 =  new P3("GASC","laurent",57,"je ne sais pas ou il habite");
var p5 =  new P3("thomas","laurent",27,"je ne sais pas ou il habite");

p4.salue(p3);
p3.salue(p4);

p4.insulte(p3,p5);

//
// var pp = new P3("NOM", "PRENOM", 35);
//
// pp.setAddress("TEST");
// console.log(pp);



var p6 = {
    "nom":"New Nom",
    "prenom":"New Prenom",
    "address":"",
    "age":0,
    getNom:function(){return this.nom;},
    setNom:function(nom){ this.nom=nom;},
    getPrenom:function() {return this.prenom;},
    setPrenom:function(pre) { this.prenom = pre; }
}


p3.insulte(p4,p6);



