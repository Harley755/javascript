let number1;
let number2;
number1 = Math.floor(Math.random() * 10) + 1;
number2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = number1 + number2;

let rec = document.getElementById("rec");
let rec2 = document.getElementById("rec2");
let input = document.querySelector('input[type=number]');


rec.innerHTML = number1;
rec2.innerHTML = number2;
let userInput = input.value;

document.querySelector('input[type=button][value=Check]').addEventListener('click', onClick);

function onClick() {
    userInput = input.value;
    if (userInput == correctAnswer) {
        alert("You are correct");
    } else {
        alert(userInput + " Your are incorrect, the answer was " + correctAnswer);
    }
    rec.innerHTML = "";
    rec2.innerHTML = "";
    input.value = "";
    number1 = Math.floor(Math.random() * 10) + 1;
    number2 = Math.floor(Math.random() * 10) + 1;
    rec.innerHTML = number1;
    rec2.innerHTML = number2;
    correctAnswer = number1 + number2;
}