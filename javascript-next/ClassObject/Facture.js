/**
 * Created by stagiaire on 22/08/2017.
 */
class Facture {
    constructor() {
        this.lignesFacture = [];
        this.fournisseur = "";
        this.raisonSocial = "";
        this.tva = 1.2; //ex 1.1 pour 10%   et 1,2 pour 20%
    }
    getTotalHTPrice(){
        var res = 0;
        for (var i=0;i<this.lignesFacture.length;i++){
            res += this.lignesFacture[i].getHTPrice();
        }
        return res;
    }
    getTTC(){
      return  this.getTotalHTPrice()*this.tva;
    }
    addLigneFacture(ligne){
        ligne.prixTTCUnit = ligne.getHTPrice()*this.tva;
        this.lignesFacture.push(ligne);
    }
    appendFactureToElement(a){
        var elementRoot = document.querySelector(a);
        var divInfos = document.createElement("div");
        var divLignes = document.createElement("div");
        divInfos.innerHTML = "<b>"+this.raisonSocial+"</b> "+this.fournisseur;
        var head = "<table>" +
            "<thead>" +
            "<tr>" +
            "<th>Qte</th>" +
            "<th>Designation</th>" +
            "<th>Prix Unitaire</th>" +
            "<th>Prix Total</th>" +
            "</tr>" +
            "</thead><tbody>",htmlLignes="";
        for (var i=0;i<this.lignesFacture.length;i++){
            var l = this.lignesFacture[i];
            htmlLignes +='<tr>' +
                '<td>'+l.qte +'</td>' +
                '<td>'+l.designation+'</td>' +
                '<td>'+l.unitprix+' € </td>' +
                '<td>'+l.getHTPrice()+' € </td>' +
                '</tr>';
        }
        var foot = "<tfoot><tr><td colspan='4'> HT:"+this.getTotalHTPrice()+" € <br> TTC: "+this.getTTC()+" € </td></tr></tfoot>";
        divLignes.innerHTML =head+htmlLignes+'</tbody>'+foot+'</table>'
        elementRoot.appendChild(divInfos);
        elementRoot.appendChild(divLignes);

    }
}

class LigneFacture {
    constructor(){
        this.qte = 0;
        this.designation="";
        this.unitprix=0;
        this.prixTTCUnit;
    }
    getHTPrice(){
        return this.qte*this.unitprix;
    }
}



var f = new Facture();
f.fournisseur = "Fournisseur";
f.raisonSocial = "Nom de l'entreprise";

var l = new LigneFacture();
l.qte = 10;
l.designation = "esclave costo et en bonne santé"
l.unitprix = 10
f.addLigneFacture(l);
var l2 = new LigneFacture();
l2.qte = 1;
l2.designation = "esclave costo et en bonne santé et beaux"
l2.unitprix = 100
f.addLigneFacture(l2);

var l2 = new LigneFacture();
l2.qte = 2;
l2.designation = "esclave costo et en bonne santé et beaux"
l2.unitprix = 100
f.addLigneFacture(l2);



console.log(f.getTTC());
f.appendFactureToElement('.FContainer');






