for (let i = 1; i < 20; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('skaicius', i, 'dalinasi is 3 ir 5');
        break;
    }
}