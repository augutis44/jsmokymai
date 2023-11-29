// 1 dalis
let blokas1 = document.getElementById('blokas1');
// console.dir(blokas1.classList);
// console.log(blokas1.classList);

blokas1.classList.add('trecia');

blokas1.classList.remove('antra');

// 2 dalis
document.getElementById('norm-tekstas').addEventListener('click', event => {
    document.querySelector('#blokas2 p').classList.remove('didesnis-tekstas');
});

document.getElementById('didesn-tekstas').addEventListener('click', event => {
    document.querySelector('#blokas2 p').classList.add('didesnis-tekstas');
});

document.getElementById('iprasta-spalva').addEventListener('click', event => {
    document.querySelector('#blokas2 p').classList.remove('raudona-teksto-spalva');
});

document.getElementById('raudona-spalva').addEventListener('click', event => {
    document.querySelector('#blokas2 p').classList.add('raudona-teksto-spalva');
});

// 3 dalis
let blokas3Mygtukas = document.querySelector('#blokas3 button');
let blokas3Par = blokas3Mygtukas.nextElementSibling;

console.log(blokas3Mygtukas, blokas3Par);

blokas3Mygtukas.addEventListener('click', event => {
    // blokas3Par.classList.toggle('slepti');

    if (blokas3Par.classList.contains('slepti')) {
        blokas3Mygtukas.textContent = 'Slepti';
        blokas3Par.classList.remove('slepti');

    } else {
        blokas3Mygtukas.textContent = 'Rodyti';
        blokas3Par.classList.add('slepti');
    }
});

// 4 dalis
let toggleMygtukas = document.querySelector('.dropdown button');
let toggleListas = document.querySelector('.dropdown ul');

toggleMygtukas.addEventListener('click', event => {
    // console.log(toggleListas);
    toggleListas.classList.toggle('rodyti');
});

// 5 dalis
let rangeInput = document.querySelector('#teksto-dydzio-keitimas input');
let tekstas = document.querySelector('#teksto-dydzio-keitimas p');

rangeInput.addEventListener('input', event => {
    let dydis = rangeInput.value + 'px';
    // console.log(dydis);
    tekstas.style.fontSize = dydis;
});