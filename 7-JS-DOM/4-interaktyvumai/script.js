// 1 dalis
document.getElementById('siurprizas').addEventListener('click', (event) => {
    alert('labas');
});

// 2 dalis
document.querySelector('#tekstas button').addEventListener('click', event => {
    event.target.nextElementSibling.textContent = 'Jega, paspaudei';
});

// 3 dalis
let mygtukai = document.querySelectorAll('#kuris button');

mygtukai.forEach(mygtukas => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', event => {
        // console.dir(event.target)
        // console.log(event.target.textContent);
        let spanEl = document.querySelector('#kuris p span');
        spanEl.textContent = event.target.textContent;
    })
})

// 4 dalis
let mygDidinti = document.getElementById('didinti');
let mygMazinti = document.getElementById('mazinti');
let counterEl = document.querySelector('#counteris p strong');

mygDidinti.addEventListener('click', event => {
    counterEl.textContent = parseInt(counterEl.textContent) + 1;
});

mygMazinti.addEventListener('click', event => {
    counterEl.textContent = parseInt(counterEl.textContent) - 1;
});

// 5 dalis
let blokas = document.getElementById('blokas');

blokas.addEventListener('click', () => {
    alert('labuką ;)');
});

blokas.addEventListener('mouseover', () => {
    // console.log('veikia');
    document.getElementById('slaptas').textContent = 'O_O';
});

// blokas.addEventListener('mouseover', () => {});
// blokas.addEventListener('mouseenter', () => {});
