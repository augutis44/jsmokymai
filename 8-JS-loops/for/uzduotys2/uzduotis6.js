// /(sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. 
// Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių
//  sumai: 1, 1, 2, 3, 5, 8, 13, 21…

let quantity = 10;
let prevNumber1 = 1;
let prevNumber2 = 0;
let curNumber = 0;

for (let i = 1; i <= quantity; i++) {
    curNumber = prevNumber1 + prevNumber2;
    console.log(curNumber);
    prevNumber2 = prevNumber1;
    prevNumber1 = curNumber;
};