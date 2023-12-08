//Suzinoti kiek kokiu raidziu yra zodziuose

let words = ['vynas', 'obuolys', 'ausakrai', 'spurgytes', 'sokoladas'];

let letters = {};

//su map ir for ciklu
// words.map((word) => {
//     let wordArr = word.split('');
//     for (let i = 0; i < wordArr.length; i++) {
//         if (wordArr[i] in letters) {
//             letters[wordArr[i]]++;
//         } else {
//             letters[wordArr[i]] = 1;
//         }
//     }
// });

//su dviem mapais
// words.map((word) => {
//     let wordArr = word.split('');
//     wordArr.map((letter) => {
//         if (letter in letters) {
//             letters[letter]++;
//         } else {
//             letters[letter] = 1;
//         }
//     })
// });

//su forEach
words.forEach((word) => {
    let wordArr = word.split('');
    wordArr.forEach((letter) => {
        if (letter in letters) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    })
});

console.log(letters);
