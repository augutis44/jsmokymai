const getSchools = async () => {
    let atsakymas = await fetch('mokyklos.json');

    // console.log(atsakymas);

    if (atsakymas.status !== 200) {
        throw new Error('Failas nerastas');
    }

    let mokyklos = await atsakymas.json()
    return mokyklos;

}

getSchools().then(duomenys => {
    console.log(duomenys);
}).catch(klaida => {
    console.log(klaida);
})