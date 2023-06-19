let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let result = document.getElementById('result');


function add() {
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

function sub() {
    result.innerHTML = parseInt(input1.value) - parseInt(input2.value);
}

function multi() {
    result.innerHTML = parseInt(input1.value) * parseInt(input2.value);
}

function division() {
    result.innerHTML = parseInt(input1.value) / parseInt(input2.value);
}