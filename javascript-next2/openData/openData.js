/**
 * Created by stagiaire on 22/08/2017.
 */

 function btnClicked(){
    //a chaque click de n'import quel button
    var request = new XMLHttpRequest();
    var innerBtn= this;
    request.open('GET',this.ayoubUrl);
    request.send()
    request.addEventListener('readystatechange',function(){
        if (this.readyState == this.DONE) {
            eval('var data = '+this.responseText);
             var DivSection = document.createElement("div");
             var H2Section =  document.createElement("h2");
            H2Section.innerHTML =innerBtn.level;
            DivSection.appendChild(H2Section);
            for(var i=0;i<data.links.length;i++) {
                var link = data.links[i];
                if (link.rel != 'self') {
                    var btn = document.createElement('button');
                    btn.innerHTML = link.rel;
                    btn.ayoubUrl =  link.href;
                    btn.rel = link.rel;
                    btn.level +="/"+link.rel;
                    btn.addEventListener('click',btnClicked)
                    DivSection.appendChild(btn);
                }
            }
            document.body.appendChild(DivSection)
        }
    });
}


var request = new XMLHttpRequest();
request.open('GET','https://opendata.paris.fr/api/v2/');
function aaaa() {
    if (this.readyState == this.DONE) {
            //ici data present dans this.responseText
       eval('var data = '+this.responseText);
       for(var i=0;i<data.links.length;i++){
           var link = data.links[i];
           if(link.rel!='self'){
               var btn = document.createElement('button');
               btn.innerHTML = link.rel;
               btn.ayoubUrl =  link.href;
               btn.rel = link.rel;
               btn.level = link.rel;
               btn.addEventListener('click',btnClicked)
               document.body.appendChild(btn);
           }
       }
       console.log(data.links);
    }
}
request.addEventListener('readystatechange',aaaa)
request.send();