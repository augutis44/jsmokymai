// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div

console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas su innerText tekstas:', tekstasIsParagrafo2);

console.log();

// trecias div

console.log('TRECIAS DIV');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

// septintas div

const pakeisti = () => {
    document.getElementById('septinto-tekstas').innerHTML = 'naujas tekstas';
}

// astuntas div

const pakeisti2 = (id, tekstas) => {
    document.getElementById(id).innerHTML = tekstas;
}

// devintas div

const pakeisti3 = (id, tekstas) => {
    document.getElementById(id).innerHTML = tekstas;
}

const kitaSpalva = (id, spalva) => {
    document.getElementById(id).style.color = spalva;
}

// desimtas div

let pirmas = 8;
let antras = 9;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;


document.getElementById('suma').innerHTML = pirmas + '+' + antras + '=' + suma;
document.getElementById('skirtumas').innerHTML = pirmas + '-' + antras + '=' + skirtumas;
document.getElementById('sandauga').innerHTML = pirmas + '*' + antras + '=' + sandauga;
document.getElementById('dalmuo').innerHTML = pirmas + '/' + antras + '=' + dalmuo;

// vienuoliktas div

let num1 = 7;
let num2 = 5;

let isvedimui = `<p>${num1} + ${num2} = ${num1 + num2}</p>
                <p>${num1} - ${num2} = ${num1 - num2}</p>
                <p>${num1} * ${num2} = ${num1 * num2}</p>
                <p>${num1} / ${num2} = ${num1 / num2}</p>`

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui;

// dvyliktas div

const keistiDydi = (id, dydis) => {
    document.getElementById(id).style.fontSize = dydis + 'px';
}

const keistiSpalva = (id, spalva) => {
    document.getElementById(id).style.color = spalva;
}

// tryliktas div

let divKeitimui = document.getElementById('div-keitimui');

let plocioSlider = document.getElementById('plocio-slider');
let aukscioSlider = document.getElementById('aukscio-slider');

plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px';
}

aukscioSlider.oninput = function () {
    divKeitimui.style.height = this.value + 'px';
}

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas')

spalvosPasirinkimas.oninput = function () {
    divKeitimui.style.background = this.value;
}

let tesktoSpalvosPasirinkimas = document.getElementById('teksto-spalvos-pasirinkimas')

tesktoSpalvosPasirinkimas.oninput = function () {
    divKeitimui.style.color = this.value;
}

let tekstasDivui = document.getElementById('tekstas-divui');

tekstasDivui.oninput = function () {
    divKeitimui.innerHTML = this.value;
}

// keturioliktas div

const pridetiZodi = (id, zodis) => {
    document.getElementById(id).value += zodis + ' ';
}

// penkioliktas div

let penkioliktoTekstas = document.getElementById('penkiolikto-tekstas');

const zodziuKiekis = () => {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');

    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p> 
    Zodziu kiekis: ${zodziai.length} </p>`
}

const ilgiausiasZodis = () => {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');

    let ilgiausias = '';

    for (let zodis of zodziai) {
        if (zodis.length > ilgiausias.length) {
            ilgiausias = zodis;
        }
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p>Ilgiausias zodis: ${ilgiausias}</p>
<p>Jo ilgis: ${ilgiausias.length} simboliu. </p>`
}

const trumpiausiasZodis = () => {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');

    let trumpiausias = zodziai[0];

    for (let zodis of zodziai) {
        if (zodis.length < trumpiausias.length) {
            trumpiausias = zodis;
        }
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p>Trumpiausio zodis: ${trumpiausias}</p>
<p>Jo ilgis: ${trumpiausias.length} simboliu. </p>`
}

// sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById('pirmas-skirtukas');
let antroSkirtukoTurinys = document.getElementById('antras-skirtukas');

const pirmasSkirtukas = () => {
    pirmoSkirtukoTurinys.style.display = 'block';
    antroSkirtukoTurinys.style.display = 'none';
}

const antrasSkirtukas = () => {
    antroSkirtukoTurinys.style.display = 'block';
    pirmoSkirtukoTurinys.style.display = 'none';
}

// septinioliktas div

let perjungtiMygtukas = document.getElementById('perjungti-mygtukas');
let perjungtiTekstas = document.getElementById('perjungti-tekstas');

perjungtiMygtukas.onclick = function () {
    if (this.innerHTML == 'Rodyti') {
        this.innerHTML = 'Nerodyti';
        perjungtiTekstas.style.display = 'block';
    } else {
        this.innerText = 'Rodyti';
        perjungtiTekstas.style.display = 'none';
    }
}

// astuonioliktas div

let kitasPergjungtiTekstas = document.getElementById('kitas-perjungti-tekstas');

document.getElementById('kitas-perjungti-mygtukas').onclick = function () {
    if (kitasPergjungtiTekstas.style.display == 'block') {
        this.innerText = 'Rodyti';
        kitasPergjungtiTekstas.style.display = 'none';
    } else {
        this.innerText = 'Nerodyti';
        kitasPergjungtiTekstas.style.display = 'block';
    }
}

// deviniolitkas div

document.getElementById('devyniolikto-tekstas').onclick = function () {
    this.style.display = 'none';
}

// dvidesimtas div

document.getElementById('spalvinti-mygtukas').onclick = function () {
    let blokeliai = document.querySelectorAll('.blokelis');

    for (const blokelis of blokeliai) {
        if (blokelis.innerText.length >= 100) {
            blokelis.style.background = 'pink';
        }
    }
}

// dvidesimt pirmas div

const skaiciuoti = () => {
    let a = parseInt(document.getElementById('number-a').value);
    let b = parseInt(document.getElementById('number-b').value);

    let isvedimui = `<p>${a} + ${b} = ${a+b}</p>
                <p>${a} - ${b} = ${a - b}</p>
                <p>${a} * ${b} = ${a * b}</p>
                <p>${a} / ${b} = ${a / b}</p>`

    document.getElementById('dvidesimt-pirmo-turinys').innerHTML = isvedimui;
}

// dvidesimt antras div

document.getElementById('ijungti-modal').onclick = function() {
    document.querySelector('.modal').style.display = 'block';
}

document.getElementById('isjungti-modal').onclick = function() {
    document.querySelector('.modal').style.display = 'none';
}
