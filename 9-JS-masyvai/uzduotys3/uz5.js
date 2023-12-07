let files = ['pirmas.png', 'antras.txt', 'trecias.json', 'ketvirtas.txt', 'penktas.js', 'sestas.png', 'septintas.txt'];

// filter metodas
let canWorkWith = files.filter((file) => file.endsWith('.json') || file.endsWith('.txt'))
console.log(canWorkWith);

// for loopas
for (const file of files) {
    if (file.endsWith('.json') || file.endsWith('.txt')) {
        console.log(file);
    }
}
