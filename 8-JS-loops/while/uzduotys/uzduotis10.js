// (sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let currentNumber = 1;
  
  while (!isPrime(currentNumber)) {
    currentNumber++;
  }
  
  console.log(`The first prime number is: ${currentNumber}`);

  isPrime(11)