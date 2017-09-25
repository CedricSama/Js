/**
 * Created by stagiaire on 17/08/2017.
 */


window.addEventListener('load',function(){
    images = document.querySelectorAll('.lightbox');
    for (var i=0; i<images.length;i++){
        images[i].addEventListener('click',function(){
            var hauteur = Math.max(window.innerHeight, document.body.scrollHeight);
            var over = document.createElement("div");
            over.id='overlay';
            delete over.id;
            over.style.height = hauteur+"px";
            over.style.display='block';
            over.addEventListener('click',function(){document.body.removeChild(this);});
            var Bigimg= document.createElement('img');
            Bigimg.src = this.src;
            Bigimg.id = "bloc_img";
            over.appendChild(Bigimg);
            document.body.appendChild(over);
        });
    }





});

