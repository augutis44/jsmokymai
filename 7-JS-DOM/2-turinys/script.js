
let pirmasParagrafas = document.querySelector('#blokas1 p.pirmas');
// console.log(pirmasParagrafas.innerText);
console.log('pirmo paragrafo tekstas:', pirmasParagrafas.textContent);

let antroParTekstas = document.querySelector('#blokas1 p.antras').textContent;
console.log('antro paragrafo tekstas:', antroParTekstas);

console.log('trečias:', document.querySelector('#blokas1 p.trecias').textContent);

let bloko2Par = document.querySelector('#blokas2 p');
console.log('antro bloko paragrafas:', bloko2Par);

console.log('paragrafo innerHTML:', bloko2Par.innerHTML);
console.log('paragrafo innerText:', bloko2Par.innerText);
console.log('paragrafo textContent:', bloko2Par.textContent);

let par1 = document.querySelector('#blokas3 .par-1');
par1.textContent = 'NAUJAS TEKSTAS';

document.querySelector('#blokas3 .par-2').innerText = 'NAUJAS KITAS TEKSTAS';

document.querySelector('#blokas3 .par-3').innerText += ' PAPILDYMAS';

document.querySelector('#blokas3 .par-4').innerHTML = 'KAINA: <span>20 €</span>';
document.querySelector('#blokas3 .par-5').textContent = 'KAINA: <span>20 €</span>';

let blokas4 = document.getElementById('blokas4');
console.dir(blokas4);

console.log('id:', blokas4.id);
console.log('klasė:', blokas4.className);

console.log('kaina:',blokas4.attributes['data-kaina'].value);

let bloko4Kaina = parseInt(blokas4.attributes['data-kaina'].value);
if (bloko4Kaina >= 10) {
    console.log('Didelė kaina');
} else {
    console.log('Maža kaina');
}

let blokas5 = document.getElementById('blokas5');
blokas5.innerHTML = '<p class="tekstukas">pirma eilute</p>';
blokas5.innerHTML += '<p class="tekstukas">antra eilute</p>';

let blokas6 = document.getElementById('blokas6');
let paragrafasNaujas = document.createElement('p');
paragrafasNaujas.textContent = 'NAUJAS paragrafas';
paragrafasNaujas.classList.add('tekstukas');
blokas6.appendChild(paragrafasNaujas);



