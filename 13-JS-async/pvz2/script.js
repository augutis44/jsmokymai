let mygtukas = document.querySelector('button');
let paragrafas = document.querySelector('p');

// console.log(mygtukas, paragrafas);

// console.log({
//     mygtukas: mygtukas,
//     paragrafas: paragrafas
// });

// console.log({
//     mygtukas,
//     paragrafas
// });

mygtukas.addEventListener('click', () => {
    paragrafas.classList.remove('hide');
});

setTimeout(() => {
    paragrafas.textContent = 'Laimėjote mandarinų!';
}, 2000);

mygtukas.addEventListener('click', () => {
    paragrafas.classList.remove('hide');
});

let spalvos = ['black', 'green', 'red', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'grey', 'white'];
let dabarSpalva = 0;

setInterval(() => {
    paragrafas.style.color = spalvos[dabarSpalva];
    if (dabarSpalva === spalvos.length - 1) {
        dabarSpalva = 0;
    } else {
        dabarSpalva++;
    }
}, 2000);