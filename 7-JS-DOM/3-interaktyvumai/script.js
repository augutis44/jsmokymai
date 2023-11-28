document.getElementById('mygtukas1').addEventListener('click', (event) => {
    alert('Paspausta ant mygtuko numeris vienas')
})

let mygtukas2 = document.getElementById('mygtukas2');
mygtukas2.addEventListener('click', event => {
    let mygtukoTekstas = (event.target.textContent);
    alert('Buvo paspaustas mygtukas ' + mygtukoTekstas)
    console.log(mygtukoTekstas);
});

let mygtukas3 = document.querySelector('#info-perdavimas button');

mygtukas3.addEventListener('click', event => {
    // alert('paspaudziau');
    // document.querySelector('#info-perdavimas p') // 1-as variantas
    // mygtukas3.nextElementSibling // 2-as variantas
    // event.target.nextElementSibling // 3-as variantas
    mygtukas3.nextElementSibling.textContent = 'paspaudziau ant trecio mygtuko'
});

let countBlokas = document.getElementById('counteris');
let countMygtukas = countBlokas.querySelector('button');
let cuontUzrasas = countBlokas.querySelector('p span');

let counter = 0;

countMygtukas.addEventListener('click', (event) => {
    // counter++;
    // cuontUzrasas.textContent = counter;
    cuontUzrasas.textContent = ++counter;
});

let reziuInput = document.querySelector('#reziai #skInput');
let reziuMygtukas = document.querySelector('#reziai button');
let reziuAts = document.querySelector('#reziai p');

reziuMygtukas.addEventListener('click', (event) => {
    // console.dir(reziuInput);
    // console.log(parseInt(reziuInput.value));
    // console.log(reziuInput.valueAsNumber);

    if (reziuInput.valueAsNumber >= 1 && reziuInput.valueAsNumber <= 100) {
        reziuAts.textContent = `Skaicius ${reziuInput.valueAsNumber} patenka i rezius`;
    } else {
        reziuAts.textContent = 'bandykite dar karta';
    }
});

document.getElementById('mygtukas-fake').addEventListener('click', (event) => {
    // event.preventDefault(); paspaudus ant a nenusoks i puslapio virsu
    event.preventDefault();
    alert('paspaudziau ant fake mygtuko');
});

let tekstoCopyInput = document.querySelector('#teksto-copy input');
let tekstoCopyAts = tekstoCopyInput.nextElementSibling;
tekstoCopyInput.addEventListener('keyup', (event) => {
    // console.log('paspausta raide');
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    tekstoCopyAts.innerHTML = '<strong>Ivestas tekstas:</strong>' + event.target.value
});
