let animals = ['mice', 'mice', 'bird', 'bird', 'bear', 'bear',
    'cat', 'cat', 'butterfly', 'butterfly', 'turtle', 'turtle'];
let cards = document.querySelectorAll('.card');
let randomIndex = 12;
let cardIdNumber = 1;

// Randomness of cards
for (let i = 0; cardIdNumber < 13; i++) {
    let randomElement = Math.floor(Math.random() * randomIndex);
    let animalCard = document.getElementById(`card${cardIdNumber}`);
    let animalPicture = animalCard.lastElementChild;
    let animalName = animalCard.attributes['data-animal'];
    animalName.value = animals[randomElement];

    switch (animalName.value) {
        case 'bear': animalPicture.src = 'bear.svg'; break;
        case 'turtle': animalPicture.src = 'turtle.svg'; break;
        case 'cat': animalPicture.src = 'cat.svg'; break;
        case 'mice': animalPicture.src = 'mice.svg'; break;
        case 'bird': animalPicture.src = 'bird.svg'; break;
        case 'butterfly': animalPicture.src = 'butterfly.svg'; break;
    }

    cardIdNumber++
    animals.splice(randomElement, 1);
    randomIndex--;
}

let openCards = [];
let isMatch = false;

const checkIfMatch = () => {

    if (openCards.length == 2) {
        if (openCards[0].cardAnimalName !== openCards[1].cardAnimalName) {
            setTimeout(() => {
                closeTwoCards();
            }, 500);
        } else {
            console.log('Its a match!');
            openCards = [];
        }
    }
} 

const closeTwoCards = () => {

    for (let i = 0; i < 2; i++) {

        let card = document.getElementById(openCards[i].cardId);

        card.classList.add('card-closed');
        card.classList.remove('card-open');

        card.firstElementChild.style.display = 'block';
        card.lastElementChild.style.display = 'none';
    }

    openCards = [];

}

// open and close cards
cards.forEach(function (card) {

    card.onclick = function () {

        if (openCards.length < 2) {
            animalObj = {
                cardAnimalName: card.attributes['data-animal'].value,
                cardId: card.id
            }
            openCards.push(animalObj);

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

            checkIfMatch();
        }

    }
});


