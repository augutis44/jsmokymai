// (sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.

// take input from the user
const lowerNumber = 1;
const higherNumber = 100;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// pirmas loopas paima skaiciu, kuri reikia tikrinti 
for (let i = lowerNumber; i <= higherNumber; i++) {
  let isPrime = true;

  // antras loopas paima visus skaicius mazesnius uz tikrinamaji ir patikrina ar kuris nors is ju dalina tikrinamaji.
  // Jeigu dalina, reiskia skaicius nera pirminis ir nustatoma isPrime i false
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  // tikrinama ar skaicius didesnis uz 1 ir ar jis pirminis, jeigu taip skaicius isprintinamas
  if (i > 1 && isPrime == true) {
    console.log(i);
  }
}