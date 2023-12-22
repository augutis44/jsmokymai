let animals = ['mice', 'mice', 'bird', 'bird', 'bear', 'bear',
    'cat', 'cat', 'butterfly', 'butterfly', 'turtle', 'turtle'];
let cards = document.querySelectorAll('.card');
let randomIndex = 12;
let cardIdNumber = 1;
let matchedCards = [];
let score = 0;

// Randomness of cards
const shufleCards = () => {
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
}

shufleCards();

let activeCards = [];
let openCards = [];

const checkIfMatch = () => {

    if (activeCards.length == 2) {
        if (activeCards[0].cardAnimalName !== activeCards[1].cardAnimalName) {
            setTimeout(() => {
                closeTwoCards();
            }, 500);
        } else {
            ++score
            activeCards.concat(matchedCards);
            openCards = openCards.concat(activeCards);
            activeCards = [];
            openCards = [];
        }
    }
}

const closeTwoCards = () => {

    for (let i = 0; i < 2; i++) {

        let card = document.getElementById(activeCards[i].cardId);

        card.classList.add('card-closed');
        card.classList.remove('card-open');

        card.firstElementChild.style.display = 'block';
        card.lastElementChild.style.display = 'none';
    }

    activeCards = [];
}

const playAgain = () => {
    animals = ['mice', 'mice', 'bird', 'bird', 'bear', 'bear',
        'cat', 'cat', 'butterfly', 'butterfly', 'turtle', 'turtle'];
    randomIndex = 12;
    cardIdNumber = 1;
    score = 0;

    cards.forEach(function (card) {

        card.classList.remove('card-open');
        card.classList.add('card-closed');

        card.firstElementChild.style.display = 'block';
        card.lastElementChild.style.display = 'none';

    });

    shufleCards();
    document.getElementById('modal').style.display = 'none';

}

// open and close cards
cards.forEach(function (card) {

    card.onclick = function () {

        animalObj = {
            cardAnimalName: card.attributes['data-animal'].value,
            cardId: card.id
        }

        let isOpen = activeCards.some(obj => obj.cardId == card.id);
        let isMatched = openCards.some(obj => obj.cardId == card.id);

        if (activeCards.length < 2 && !isOpen && !isMatched) {

            activeCards.push(animalObj);

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

            checkIfMatch(animalObj);
        }

        if (score == 6) {
            document.getElementById('modal').style.display = 'block';
        }

    }
});


