// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)

const function1 = (numberArr, callBackFunc) => {
    for (const number of numberArr) {
        setTimeout(() => {
            callBackFunc(number);
        }, 2000);
    }
}

const function2 = (number) => {
    if (number % 2 == 0) {
        console.log(number + ' skaicius lyginis');
    } else {
        console.log(number + ' skaicius nelyginis');
    }
}


function1([1, 2, 3, 4, 5, 6, 7, 8, 9], function2);