window.addEventListener('load', function () {
    //Html Loaded
    var madiv = document.getElementById('div1');
    var madiv2 = document.getElementById('div2');
    var monInput = document.getElementById('input1');

    madiv.style.backgroundColor = "gray"
    madiv.addEventListener('mousedown', function () {
        //sur button guauche de la souris pressé (sans relacher)
        console.log("madiv mousedown declaché");
    });
    madiv2.addEventListener('mousedown', function () {
        //sur button guauche de la souris pressé (sans relacher)
        console.log("madiv2 mousedown declaché");
    });
    madiv.addEventListener('click', function () {
        // sur le click de l'element
        console.log("click declaché");
    });
    madiv.addEventListener('dblclick', function () {
        // sur le double click de l'element
        console.log("dblclick declaché");
    });
    madiv.addEventListener('mouseenter', function () {
        // quand la souris entre dans la zone delimité par l'elemnt
        console.log("mouseenter declaché");
    });

    madiv.addEventListener('mousemove', function () {
        // quand la souris bouge dans la zone delimité par l'elemnt
        console.log("mousemove declaché");
    });
    madiv.addEventListener('mouseover', function () {
        // quand la souris et au dessus la zone delimité par l'elemnt
        console.log("mouseover declaché");
    });
    madiv.addEventListener('mouseout', function () {
        // quand la souris sort de la zone delimité par l'elemnt
        this.style.backgroundColor = "red";
        console.log("mouseout declaché");
    });
    madiv.addEventListener('mouseup', function () {
        // quand on relache le button guauche de la souris
        console.log("mouseup declaché");
    });

    madiv.addEventListener('mouseleave', function () {
        // quand la souris sort de la zone delimité par l'elemnt


        this.style.backgroundColor = "yellow";
        console.log("mouseleave declaché");
    });

    monInput.addEventListener('keydown', function (e) {
        if ((parseInt(e.key) != e.key && e.key != "Backspace"))e.preventDefault();
    });

    monInput.addEventListener('keypress', function (e) {
        // console.log(" keypress declaché",e,this.value);
    });

    monInput.addEventListener('keyup', function (e) {
        // console.log("keyup declaché",e,this.value);
    });

});
