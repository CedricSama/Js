console.log('Calc Script Loaded');
var buttons = document.getElementsByTagName("button");
var ecranCalc = document.getElementById('ecran');

ecranCalc.addEventListener('keydown', function (e) {
    if(e.key =="Enter"){this.value = eval(this.value)}
    else
    if (parseInt(e.key) != e.key &&
            e.key != "Backspace" &&
            e.key != "+" &&
            e.key != "-" &&
            e.key != "*" &&
            e.key != "/"
        ) e.preventDefault();
});


for (var i = 0; i < buttons.length; i = i + 1) {
    buttons[i].onclick = function () {
        ecranCalc.value += this.id;
        console.log(ecranCalc.value)
    };
}
document.getElementById("=").onclick = function () {
    ecranCalc.value = eval(ecranCalc.value);
}

document.getElementById("n!").onclick = function () {
    ecranCalc.value = fact(parseInt(ecranCalc.value));
}
document.getElementById("bin").onclick = function () {
    ecranCalc.value = decToBinary(parseInt(ecranCalc.value));
}

document.getElementById("dec").onclick = function () {
    ecranCalc.value = BinaryToDec(ecranCalc.value);
}


function factdec(n) {
    var res = 1;
    for (i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
function fact(n) {
    var res = 1, i = 1;
    while (i <= n) {
        res = res * i;
        i++;
    }
    return res;
}

function decToBinary(decimalParam) {
    var bit = parseInt(decimalParam % 2), innerdec = parseInt(decimalParam / 2), res = "" + bit;
    while (innerdec > 0) {
        bit = innerdec % 2;
        innerdec = parseInt(innerdec / 2);
        res = bit + res;// equi res = res + bit;
    }
    return res;
}

function BinaryToDec(binaryParam) {
    var bit, res = 0, binaryParamString = "" + binaryParam;
    for (var i = binaryParamString.length - 1; i >= 0; i--) {
        bit = binaryParamString.charAt(i);
        res += (parseInt(bit) * Math.pow(2, binaryParamString.length - 1 - i));
    }
    return res;
}


console.log(fact(5));
console.log(factdec(5));






