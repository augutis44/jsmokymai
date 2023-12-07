let someStr = '01410';

let someStrArr = someStr.split('');
let someStrArrReverse = someStrArr.slice().reverse();
let isPolindrom = true;

for (let i = 0; i <= someStr.length; i++) {
    if (someStrArr[i] != someStrArrReverse[i]) {
        console.log('Skaicius NERA yra palindromis');
        isPolindrom = false;
        break;
    }
}

if (isPolindrom) {
    console.log('Skaicius yra palindromis');
} 
