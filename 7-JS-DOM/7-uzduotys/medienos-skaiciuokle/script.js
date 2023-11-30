let calibratedButton = document.getElementById('calibratedButton');
let constructionButton = document.getElementById('constructionButton');
let calibratedOrConstruction = document.querySelector('#results h3');

let thicknessElement = document.getElementById('constructionThickness');
let widthElement = document.getElementById('constructionWidth');
let lengthElement = document.getElementById('length');
let quantityElement = document.getElementById('quantity');

let cubatureCalculate = document.getElementById('cubature');
let infoThicnessResult = document.querySelector('#results .results-info .info-thickness .right span');
let infoWidthResult = document.querySelector('#results .results-info .info-width .right  span');
let infoLengthResult = document.querySelector('#results .results-info .info-length .right span');
let infoQuantityhResult = document.querySelector('#results .results-info .info-quantity .right span');

const cubatureCalculation = () => {
    let newCalculation = ((parseInt(infoThicnessResult.textContent) * 0.001) * (parseInt(infoWidthResult.textContent) * 0.001) * (parseInt(infoLengthResult.textContent) * 0.001) * (parseInt(infoQuantityhResult.textContent))).toFixed(3);
    cubatureCalculate.textContent = newCalculation;
}

const priceCalculation = () => {
    let thicknessPrice = parseFloat(thicknessElement.options[thicknessElement.selectedIndex].attributes['data-price'].value);
    let widthPrice = parseFloat(widthElement.options[widthElement.selectedIndex].attributes['data-price'].value);
    let lengthPrice = parseFloat(lengthElement.options[lengthElement.selectedIndex].attributes['data-price'].value);
    let quantityPrice = parseFloat(document.querySelector('#quantityInput').value);

    let finalPrice = ((thicknessPrice + widthPrice + lengthPrice) * quantityPrice).toFixed(2)

    document.getElementById('finalPrice').textContent = finalPrice;
}

calibratedButton.addEventListener('click', event => {
    constructionButton.classList.remove('clickedButton');
    calibratedButton.classList.add('clickedButton');
    calibratedOrConstruction.textContent = 'kalibruota mediena';

    document.getElementById('calibratedThickness').classList.remove('select-display-non-using');
    document.getElementById('constructionThickness').classList.add('select-display-non-using');

    document.getElementById('calibratedWidth').classList.remove('select-display-non-using');
    document.getElementById('constructionWidth').classList.add('select-display-non-using');

    infoThicnessResult.textContent = '20';
    infoWidthResult.textContent = '45';
    document.querySelector('#results .results-info .info-cubature .right #cubature').textContent = '0.0027';
    document.querySelector('#results .results-info .info-price .right #finalPrice').textContent = '1.95';
});

constructionButton.addEventListener('click', event => {
    calibratedButton.classList.remove('clickedButton');
    constructionButton.classList.add('clickedButton');
    calibratedOrConstruction.textContent = 'statybinė mediena';

    document.getElementById('calibratedThickness').classList.add('select-display-non-using');
    document.getElementById('constructionThickness').classList.remove('select-display-non-using');

    document.getElementById('calibratedWidth').classList.add('select-display-non-using');
    document.getElementById('constructionWidth').classList.remove('select-display-non-using');

    infoThicnessResult.textContent = '25';
    infoWidthResult.textContent = '50';
    document.querySelector('#results .results-info .info-cubature .right #cubature').textContent = '0.004';
    document.querySelector('#results .results-info .info-price .right #finalPrice').textContent = '1.27';
});

thicknessElement.addEventListener('change', event => {
    let infoThicness = thicknessElement.value;
    infoThicnessResult.textContent = infoThicness;

    cubatureCalculation();
    priceCalculation();
});

widthElement.addEventListener('change', event => {
    let infoWidth = widthElement.value;
    infoWidthResult.textContent = infoWidth;

    cubatureCalculation();
    priceCalculation();
});

lengthElement.addEventListener('change', event => {
    let infoLength = lengthElement.value;
    infoLengthResult.textContent = infoLength;

    cubatureCalculation();
    priceCalculation();
});

document.getElementById('quantity').addEventListener('change', event => {
    let infoQuantity = document.querySelector('#quantityInput').value;

    if (infoQuantity < 0) {
        alert('Kiekis negali būti minusinis');
        infoQuantityhResult.textContent = '0';
    } else {
        infoQuantityhResult.textContent = infoQuantity;

        cubatureCalculation();
        priceCalculation();
    }
});



