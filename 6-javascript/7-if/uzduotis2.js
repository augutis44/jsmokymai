let age = 32;

if (age >= 18) {
    console.log('Jūs galite balsuoti')
}


let grades = [2, 2, 6, 10, 6];

if (grades.reduce((partialSum, a) => partialSum + a) / grades.length > 5) {
    console.log('vidurkis teigiamas')
}

