// Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. 
// Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.

let arr = [1999, 2000, 2001, 2002, 2003, 2004, 2005];

console.log(arr);

arr[0] = 1998;
arr[arr.length - 1] = 2006;
arr[4]= 2007;

console.log(arr);
