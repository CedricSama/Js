/**
 * Created by stagiaire on 24/08/2017.
 */
//MON JSON DE MUSIQUE////////////////
var playList = [
    {
        titre: 'Black Swan',
        url: 'http://stream1.addictradio.net/addictalternative.mp3',
        img: 'img/pict/img1.jpeg'
    },
    {
        titre: 'Claire de lune',
        url: 'http://novazz.ice.infomaniak.ch/novazz-128.mp3',
        img: 'img/pict/img2.jpg'
    },
    {
        titre: 'Für Elise',
        url: 'http://ouifm2.ice.infomaniak.ch/ouifm2.mp3',
        img: 'img/pict/img3.jpg'
    }
];
window.addEventListener('load', function () {
//recuperation des elements HTML

    var mp3Reader = document.getElementById("mon_son");
    //var AudioSrc = mp3Reader.getAttribute("src");
    var btnPlay = document.getElementById("butt_play");
    var btnNext = document.getElementById("butt_next");
    var btnPrev = document.getElementById("butt_previus");
    var btnStop = document.getElementById("butt_stop");
    var img = document.getElementById("pict");
    var volume = document.getElementById("volume");
    var volumeLabel = document.querySelector("form label");
    var titre = document.querySelector("h2");

    volumeLabel.innerHTML = parseFloat(volume.value) * 100 + "%";
    var CurentMp3 = 0;

    function play2() {
        console.log('play 2 ');
        mp3Reader.setAttribute('src', playList[0].url);
        titre.innerHTML = playList[0].titre;
        img.src = playList[0].img;
        btnPlay.removeEventListener('click', play2);
        btnPlay.addEventListener('click', play);
        mp3Reader.play();
    }

    function play() {
        if (mp3Reader.paused) {
            mp3Reader.play();
        } else {
            mp3Reader.pause();
        }
    }
    btnPlay.addEventListener('click', play2);
    function stop() {
        mp3Reader.setAttribute('src', "");
        titre.innerHTML = "Pas de piste en cours";
        img.src = "";
        btnPlay.removeEventListener('click', play);
        btnPlay.addEventListener('click', play2);
    }

    btnStop.addEventListener('click', stop);

    function Next() {
        // CurentMp3++;
        //if(CurentMp3 == playList.length)CurentMp3 =0;
        var index = getIndexOf(mp3Reader.getAttribute("src")) + 1;
        if(!playList[index])index = 0;
        // if (index == playList.length) index = 0;
        mp3Reader.setAttribute('src', playList[index].url);
        titre.innerHTML = playList[index].titre;
        img.src = playList[index].img;
    }

    btnNext.addEventListener('click', Next);
    function Previous() {
        var index = getIndexOf(mp3Reader.getAttribute("src")) - 1;
        if(!playList[index])index = playList.length-1;
        mp3Reader.setAttribute('src', playList[index].url);
        titre.innerHTML = playList[index].titre;
        img.src = playList[index].img;
    }
    btnPrev.addEventListener('click', Previous);
    volume.addEventListener('change', function () {

         mp3Reader.volume = this.value;
         volumeLabel.innerHTML = parseFloat(this.value) * 100 + "%";
    })
    function getIndexOf(url) {
        for (var i = 0; i < playList.length; i++) {
            if (playList[i].url == url) {
                console.log(i);
                return i;
            }
        }
    }


});