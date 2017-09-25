window.addEventListener('load',function(){
    var vignettes = document.querySelectorAll('.img-thumbnail');
    console.log(vignettes)
    var urlsList = [];
    for (var i=0;i<vignettes.length;i++){
        urlsList.push(vignettes[i].src);
    }
    var view= document.querySelector('.viewer');
    for (var i=0;i<vignettes.length;i++){
        vignettes[i].addEventListener('click',function(){
            view.src =this.src;
                //.src=this.src;
        });
    };

    document.getElementById("next").addEventListener('click', function(){
                var index = urlsList.indexOf(view.src);
                 if(urlsList[index+1]==undefined)index=-1;
                 view.src =urlsList[index+1];
    });
    document.getElementById("prev").addEventListener('click', function(){
        var index = urlsList.indexOf(view.src);
        if( urlsList[index-1]==undefined)index = urlsList.length ;
        view.src =urlsList[index-1];
    });


});