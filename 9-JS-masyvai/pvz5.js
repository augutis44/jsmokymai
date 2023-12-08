let skaiciai = [3, 4, 5, 6, 4, 3, 7];

skaiciai.forEach(sk => {
    let kartojasi = 0

    skaiciai.forEach(sk2 => {
        if (sk == sk2) {
            kartojasi++;
        }
    })

    if (kartojasi > 1) {
        console.log(sk, 'yra dublikatu. Skaicius kartojasi', kartojasi, 'kartus.');
    } else {
        console.log(sk, 'nesidubliuoja');
  }
})