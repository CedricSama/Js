/**
 * Created by stagiaire on 16/08/2017.
 */
/*
 *
 * tri_à_bulles(Tableau T)
 pour i allant de taille de T - 1 à 1
 pour j allant de 0 à i - 1
 si T[j+1] < T[j]
 échanger(T[j+1], T[j])
 */
window.addEventListener('load', function () {
    var text = document.getElementById("text");
    var tabButton = document.getElementsByTagName("button");
    var button = tabButton[0];
    var divRes = document.getElementById("resultat");
    var divHistory = document.getElementById("history");
    button.addEventListener('click', function () {
        var tab = text.value.split(',');
        var div = document.createElement('div');
        divHistory.innerHTML += divRes.innerHTML;
        divRes.innerHTML="";
        divRes.appendChild(div);
        var choice = document.querySelector('input[name="algo"]:checked');
        if (choice.value == "I") {
            div.innerHTML = triInsertion(tab).join('-');
        } else {
            div.innerHTML = TrieABulls(tab).join('-');
        }
    });
});

function TrieABulls(tab) {
    var i, j, echangeur;
    for (i = tab.length - 1; i >= 1; i--) {
        for (j = 0; j <= i - 1; j++) {
            if (parseFloat(tab[j + 1]) < parseFloat(tab[j])) {
                echangeur = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = echangeur
            }
            console.log("i:" + i, "j:" + j, tab.join("-"))
        }
    }
    return tab;
}
Array.prototype.trieABull = TrieABulls;

/*
 procédure tri_insertion(tableau T, entier n)
 pour i de 1 à n - 1
 # mémoriser la valeur de T[i]
 x ← T[i]
 # déplacer d'un cran  vers la droite les éléments de T[0]..T[i-1] qui sont plus grands que lui
 j ← i
 tant que j > 0 et T[j - 1] > x
 T[j] ← T[j - 1]
 j ← j - 1
 fin tant que
 # et mettre la valeur dans le "trou" que ça a laissé
 T[j] ← x
 fin pour
 fin procédure
 */


function triInsertion(T) {
    var i, j, x;
    for (i = 1; i <= T.length - 1; i++) {
        x = T[i];
        j = i;
        while ((j > 0) && (parseFloat(T[j - 1]) > parseFloat(x))) {
            T[j] = T[j - 1];
            j--;
        }
        T[j] = x;
        console.log(T);
    }
    return T;
}

console.log(TrieABulls([5, 22, 4, 9, 0, 1]));








