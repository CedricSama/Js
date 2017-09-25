console.log('lightbox v1');

window.addEventListener('load', function(){

	//creation d'un div overlay
	var overlay = document.createElement('div');
	overlay.id = 'overlay';

	//je prend le max entre la taille du doc et la taille de la fenetre
	var hauteur = Math.max(window.innerHeight, document.body.scrollHeight);
	overlay.style.height = hauteur + 'px';

	document.body.appendChild(overlay);

	//recup des images
	var imgList = document.querySelectorAll('.lightbox');

	for(var i=0;i < imgList.length;i++){
		imgList[i].addEventListener('click', function(){
			var img = this.src;
			overlay.innerHTML = '<div id="bloc_img"><img src="'+img+'" ></div>';
			
			var blocImg = document.getElementById('bloc_img');
			blocImg.style.height = (window.innerHeight-20) + 'px';

			if(this.getAttribute('title')!='' && this.getAttribute('title')!=null){
				var bandeau = document.createElement('div');
				bandeau.id = 'bandeau';
				bandeau.innerHTML = '<p>'+this.getAttribute('title')+'</p>';

				blocImg.appendChild(bandeau);
			}

			showOverlay(overlay);
		});
	}

	//surveille le click sur l'overlay
	overlay.addEventListener('click', function(){
		hideOverlay(overlay);
	})

});

function showOverlay(monOverlay){
	monOverlay.style.display = 'block';
	monOverlay.style.opacity = '0';

	setTimeout(function(){
		monOverlay.style.opacity = '1';
		monOverlay.style.transition = '0.5s';
	},10); //J'attends 10ms
}

function hideOverlay(monOverlay){
	
	//endTransition est appellée à la fin de la transition
	monOverlay.addEventListener('transitionend', endTransition);

	function endTransition(){
		monOverlay.style.display = 'none';
		//on supprime le listener transitionend pour ne pas créer de problème avec l'affichage
		monOverlay.removeEventListener('transitionend', endTransition);
	}

	monOverlay.style.opacity = '0';
	monOverlay.style.transition = '0.5s';
}