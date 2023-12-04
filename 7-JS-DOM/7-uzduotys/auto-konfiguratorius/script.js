let mainPacketBoxes = document.querySelectorAll('#main-packet .choice-box');
let colorBoxes = document.querySelectorAll('#color .choice-box');
let engineBoxes = document.querySelectorAll('#engine .choice-box');
let salonBoxes = document.querySelectorAll('#salon .choice-box');
let additionalBoxes = document.querySelectorAll('#additional .choice-box');
let totalCost = 0;

const clearAllChecks = (allSectionBox) => {
    allSectionBox.forEach(box => {
        box.classList.remove('active-box');

        // Jeigu box.querySelector('.check-mark-circle') true, tuomet po ? vykdo, jeigu ne tuomet nevykdo tolimesnio veiksmo
        box.querySelector('.check-mark-single')?.remove();
    });
};

const clickOnSingleChoice = (box, allSectionBox) => {
    box.addEventListener('click', () => {
        clearAllChecks(allSectionBox);
        box.classList.add('active-box');
        box.innerHTML += `<div class="check-mark-single">
            <img src="images/check-single.svg" alt="circle check mark">
        </div>`

        calculateTotalCost();
    });
};

const clickOnMultiChoice = (box) => {
    box.addEventListener('click', () => {
        let active = box.querySelector('.check-mark-multi');

        if (active) {
            active.remove();
            box.classList.remove('active-box');
        } else {
            box.classList.add('active-box');
            box.innerHTML += `<div class="check-mark-multi">
            <img src="images/check-multi.svg" alt="circle check mark">
        </div>`}

        calculateTotalCost();
    });
};

const calculateTotalCost = () => {
    totalCost = 0;

    document.querySelectorAll('.active-box .price span').forEach(price => {
        totalCost += parseInt(price.innerHTML.replace(" ", ""));
    });

    // .replace(/\B(?=(\d{3})+(?!\d))/g, " "); padaro, kad skaicius 18000 taptu 18 000 formatu stringu. Regex
    let totalCostToSring = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    document.querySelector('.final-price-box p span').innerHTML = totalCostToSring;
};

mainPacketBoxes.forEach(box => {
    clickOnSingleChoice(box, mainPacketBoxes);
});

colorBoxes.forEach(box => {
    clickOnSingleChoice(box, colorBoxes);
});

engineBoxes.forEach(box => {
    clickOnSingleChoice(box, engineBoxes);
});

salonBoxes.forEach(box => {
    clickOnSingleChoice(box, salonBoxes);
});

additionalBoxes.forEach(box => {
    clickOnMultiChoice(box);
});

document.getElementById('buy-button').addEventListener('click', () => {
    document.getElementById('cards-container').classList.add('hidden-container');
    document.getElementById('thanks-container').classList.remove('hidden-container');

    let player = document.querySelector("lottie-player");
    player.play();
});






