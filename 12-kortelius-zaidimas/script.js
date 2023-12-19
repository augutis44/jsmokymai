let imagePaths = ['pic1.svg', 'pic1.svg',
    'pic2.svg', 'pic2.svg', 'pic3.svg', 'pic3.svg',
    'pic4.svg', 'pic4.svg', 'pic5.svg', 'pic5.svg',
    'pic6.svg', 'pic6.svg',];
let cards = document.querySelectorAll('.card');
let randomIndex = 12;
let cardIdNumber = 1;

for (let i = 0; cardIdNumber < 13; i++) {
    let randomElement = Math.floor(Math.random() * randomIndex);
    document.getElementById(`card${cardIdNumber}`).lastElementChild.src = imagePaths[randomElement];
    cardIdNumber++
    imagePaths.splice(randomElement, 1);
    randomIndex--;
}

cards.forEach(function (card) {

    card.onclick = function () {
        if (card.classList.contains('card-closed')) {
            card.classList.remove('card-closed');
            card.classList.add('card-open');

            card.firstElementChild.style.display = 'none';
            card.lastElementChild.style.display = 'block';
        } else {
            card.classList.add('card-closed');
            card.classList.remove('card-open');

            card.firstElementChild.style.display = 'block';
            card.lastElementChild.style.display = 'none';
        }
    }
});

