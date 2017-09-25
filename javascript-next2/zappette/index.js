function AfterHtmlLoaded(){
 var iframe,select,selectChangefn,url;
 iframe = document.getElementsByTagName("iframe")[0];
 select = document.getElementById("sites");
 selectChangefn = function(){
     url = this.value;
     iframe.src =url;
 };
 //Ajouter l'evenement select sur lelement html combobox
 select.addEventListener('change',selectChangefn);

 iframe.addEventListener('load',function(){
     alert("Fin de chargement du "+this.src+" bonne lecture");
 })

}
window.addEventListener('load',AfterHtmlLoaded)
console.log('Script loaded');