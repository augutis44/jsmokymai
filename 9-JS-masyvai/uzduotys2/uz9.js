let grade = [];
let howManyGrades = Math.floor(Math.random() * (10 - 1 + 1) + 1);

for (let i = 1; i <= howManyGrades; i++) {
    grade.push(Math.floor(Math.random() * (10 - 2 + 1) + 2));
}

console.log(grade);

for (let i = 0; i < grade.length; i++) {
    if (grade[i] > 4) {
        console.log(`${i + 1} pazimys ${grade[i]} yra teigiamas`);
    } else {
        console.log(`${i + 1} pazimys ${grade[i]} yra neigiamas. Truko ${5 - grade[i]} balo iki teigiamo`);
    }
}