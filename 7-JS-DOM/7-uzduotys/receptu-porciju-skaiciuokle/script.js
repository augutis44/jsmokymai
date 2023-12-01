// document.getElementById('card1').addEventListener('click', event => {
//     document.getElementById('selected-check').classList.remove('display-none')
// });

let checkMarks = document.querySelectorAll('.cards-container .card');
let checkedCardId;
let portionSize = 1;

const showRecipes = () => {
    switch (checkedCardId) {
        case 'card1':
            document.querySelector('.ingredients div').innerHTML = `<p>Vištienos: <span>${100 * portionSize} g</span></p> <p>Salotų lapų: <span>${200 * portionSize} g</span></p> <p> Pomidorų: <span>${1 * portionSize} vnt.</span></p> <p>Agurkų: <span>${50 * portionSize} g</span></p> <p>Padažo: <span>${2 * portionSize} šaukštelių</span></p>`;
            break;
        case 'card2':
            document.querySelector('.ingredients div').innerHTML = `<p>Miltų: <span>${500 * portionSize} g</span></p> <p>Kiaušinių: <span>${2 * portionSize} vnt.</span></p> <p> Mėlynių: <span>${100 * portionSize} g</span></p> <p>Cukraus: <span>${2 * portionSize} šaukštelių</span></p>`;
            break;
        case 'card3':
            document.querySelector('.ingredients div').innerHTML = `<p>Makaronų: <span>${100 * portionSize} g</span></p> <p>Kiaulienos: <span>${100 * portionSize} g</span></p> <p> Kiaušinių: <span>${1 * portionSize} vnt.</span></p> <p>Žolelių papuošimui: <span>${1 * portionSize} vnt.</span></p>`;
            break;
    };
};

const getCheckboxById = (elementId) => {
    return document.querySelector(`#${elementId} .selected-check`);
};

const clearAllChecks = () => {
    checkMarks.forEach(check => {
        let checkBox = getCheckboxById(check.id)
        checkBox.classList.add('display-none');
    });
};

checkMarks.forEach(check => {
    check.addEventListener('click', () => {
        clearAllChecks();
        checkedCardId = check.id;
        let checkBoxId = getCheckboxById(check.id)
        checkBoxId.classList.remove('display-none');
        showRecipes();
    });
});

let inputElement = document.querySelector('.portions input');
inputElement.addEventListener('change', () => {
    portionSize = parseInt(inputElement.value);
    showRecipes();
});
