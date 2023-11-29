// 1 dalis
let blokas1 = document.getElementById('blokas1');
// console.dir(blokas1);
console.log(blokas1.style);

blokas1.style.color = 'red';
blokas1.style.backgroundColor = '#f8f8f8';
blokas1.style.border = '1px solid black';

// 2 dalis
let blokas2 = document.getElementById('blokas2');

blokas2.style.border = '2px solid black';
blokas2.style.color = 'black';

// 3 dalis
let blokas3Span = document.querySelector('#blokas3 p span');
let blokas3Mygtukas = document.querySelector('#blokas3 button');

blokas3Mygtukas.addEventListener('click', event => {
    // console.log('paspaudziau');
    let skaicius = parseInt(blokas3Span.textContent);
    // console.log(skaicius);
    if (skaicius % 2 == 0) {
        blokas3Span.style.backgroundColor = 'green';
        blokas3Span.style.color = 'white';
    } else {
        blokas3Span.style.backgroundColor = 'red';
        blokas3Span.style.color = 'white';
    }
});

// 4 dalis
let blokas4input = document.querySelector('#blokas4 input');

blokas4input.addEventListener('input', event => {
    // console.log('ivyko pokytis');
    document.getElementById('rangeReiksme').textContent = blokas4input.valueAsNumber;

    let rangeKoks = document.getElementById('rangeKoks');

    if (blokas4input.valueAsNumber % 2 == 0) {
        rangeKoks.textContent = 'Lyginis';
        rangeKoks.style.color = 'green';
    } else {
        rangeKoks.textContent = 'Nelyginis';
        rangeKoks.style.color = 'red';
    }
})
