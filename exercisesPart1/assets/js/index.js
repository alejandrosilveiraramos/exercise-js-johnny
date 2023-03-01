// ### Ex 01

// `Crie dois inputs no html, e crie um select do html aonde o usuario irá colocar numeros nos 2 inputs selecionar a operação + - * / e depois mostrar o resultado após clicar no botão calcular`

// ---


// First code working

// let firstNumber = Number(document.querySelector('#firstNumber').value);
// let secondNumber = Number(document.querySelector('#secondNumber').value);


// const sumNumbers = () => {

//     console.log(firstNumber)
//     console.log(secondNumber)

//     document.getElementById('result').innerHTML = firstNumber + secondNumber;

// }

// const subNumbers = () => {

//     console.log(firstNumber)
//     console.log(secondNumber)

//     document.getElementById('result').innerHTML = firstNumber - secondNumber;

// }

// const multNumbers = () => {

//     console.log(firstNumber)
//     console.log(secondNumber)

//     document.getElementById('result').innerHTML = firstNumber * secondNumber;
// }

// Creating a variation

const calculate = (operation) => {

    let firstNumberEx1 = Number(document.querySelector('#firstNumberEx1').value);
    let secondNumberEx2 = Number(document.querySelector('#secondNumberEx2').value);

    let resultEx1;

    if (operation === 'add') {
        resultEx1 = firstNumberEx1 + secondNumberEx2
    }
    else if (operation === 'sub') {
        resultEx1 = firstNumberEx1 - secondNumberEx2
    }
    else if (operation === 'mult') {
        resultEx1 = firstNumberEx1 * secondNumberEx2
    }

    document.getElementById('resultEx1').innerHTML = resultEx1

}

//Idea, creaete a full calculator in js using Html and css

/////////////////////////////////

// ### Ex 02

// `Faça um programa que capture o evento de um input na sua tela e mostre automaticamente a tabuada desse número abaixo.`

// ---

const inputTable = document.getElementById('inputTable');
const resultTable = document.getElementById('resultTable');

inputTable.addEventListener('input', () => {

    let numberToMult = parseInt(inputTable.value);
    let numberTableResult = [];

    for (let i = 1; i <= 10; i++) {
        numberTableResult.push(numberToMult * i);
    }

    document.getElementById('resultTable').innerHTML = numberTableResult.join(', ')
    if (isNaN(numberToMult) || numberToMult <= 0) {
        document.getElementById('resultTable').innerHTML = 'Any number multipled for ZERO is ZERO';
        return;
    }
});

inputTable.addEventListener('blur', () => {
    if (inputTable.value === '') {
        document.getElementById('resultTable').innerHTML = 'Cannot be empty';
    }
})


////////////////////

// ---

// ### Ex 03
// `Crie um botão no html que ao ser clicado ele gere um numero aleatorio e mostre na tela`

// ---

const clickNumber = document.getElementById('clickNumber');

clickNumber.addEventListener('click', () => {
    document.getElementById('randomNumberResult').innerHTML = Math.random() * 10;

})

////////////////////

// ### Ex 04
// `Crie um input aonde o usuario irá digitar uma url e ao clicar no botão deverá abrir uma janela com a url que o usuario informou`

// - Dica: Utilizar o window.open('url')

// ---

const inputUrl = document.getElementById('inputUrl');

const done = document.getElementById('done');

const openUrl = document.getElementById('openUrl');

openUrl.addEventListener('click', () => {

    if (inputUrl.value === '') {
        done.innerHTML = 'Input Cannot be empty'
    }
    else if (inputUrl !== '') {
        done.innerHTML = `${inputUrl.value} <br> <br> Link Opened`

        window.open(inputUrl.value)
    }
})





