let firstNumber = 0;
let secondNumber = 0;
let action = '';
let answer = 0;

let input = document.getElementById('calc-input');
let calculationSpan = document.getElementById('calculation');

let history = [];

const onNumberClick = (number) => {
    input.value == '0' ? input.value = number : input.value += number;
    action == '' ? firstNumber = input.value : secondNumber = input.value;
}

const dot = () => {
    input.value += '.';
}

const clearInput = () => {
    if (action == '') {
        firstNumber = 0;
        input.value = firstNumber;
    } else {
        secondNumber = 0;
        input.value = secondNumber;
    }
}

const onActionClick = (clickedAction) => {
    input.value = '';
    action = clickedAction;

    calculationSpan.innerText = `${firstNumber} ${action}`;
}

const onCountClick = () => {
    if (action !== '') {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        calculateAnswer();
        input.value = answer;

        calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;

        addToHistory();
        historyItemDiv();

        firstNumber = input.value;
        secondNumber = 0;
        action = '';
    } 
}

const calculateAnswer = () => {
    switch (action) {
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case 'x': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
    }
}

const onCleanClick = () => {
    firstNumber = 0;
    secondNumber = 0;
    action = '';
    answer = 0;
    input.value = '';
    calculationSpan.innerText = '';
}

const addToHistory = () => {
    const historyItem = {
        firstNumber,
        action,
        secondNumber,
        answer
    };
    history.push(historyItem);
}

document.getElementById('show-history').onclick = function () {
    document.querySelector('.history .history-div').style.display = 'block';
}

document.getElementById('hide-history').onclick = function () {
    document.querySelector('.history .history-div').style.display = 'none';
}

document.getElementById('clear-history').onclick = function () {
    history = [];
    historyItemDiv();
}

const historyItemDiv = () => {
    if (history.length > 5) {
        history.shift();
    }

    let formatted = history.map(x => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
    let historyBlock = document.querySelector('.calculator .history-item');
    historyBlock.innerHTML = formatted.join('');
}


