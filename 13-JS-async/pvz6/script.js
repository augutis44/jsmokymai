let mygtukai = document.querySelectorAll('.informacija .mygtukai button');
let atsakymoBlokas = document.querySelector('.informacija .turinys');

mygtukai.forEach((mygtukas) => {
    // console.log(mygtukas);

    mygtukas.addEventListener('click', () => {
        // console.log(mygtukas.attributes['data-file'].value);

        let failas = mygtukas.attributes['data-file'].value;

        fetch(failas).then(atsakymas => {
            // console.log("gautas atsakymas:", atsakymas);
            return atsakymas.json();
        }).then(duomenys => {
            // console.log('atsakymas geras:', duomenys);

            switch (failas) {
                case 'projektai.json': spausdintiProjektus(duomenys); break;
                case 'darbuotojai.json': spausdintiDarbuotojus(duomenys); break;
                case 'uzduotys.json': spausdintiUzduotis(duomenys); break;

            }
        }).catch(klaida => {
            // console.log('atsakymas blogas:', klaida);
            atsakymoBlokas.innerHTML = `<p>Ivyko klaida.</p>`
        });
    });
});

const spausdintiProjektus = (projektai) => {
    let html = '';

    for (const projektas of projektai) {
        // console.log(projektas);
        html += `<div class="projektas">
                    <h3>${projektas.pavadinimas}</h3>
                    <p>${projektas.aprasymas}</p>
                    <p><strong>Kaina:</strong> ${projektas.kaina} €</p>
                    <p><strong>Ar igyvendintas:</strong> ${projektas.ar_igyvendintas ? 'Taip' : 'Ne'}</p>
                </div>`;
    }

    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('projektai');
    atsakymoBlokas.classList.remove('darbuotojai', 'uzduotys');

}

const spausdintiDarbuotojus = (darbuotojai) => {
    let html = '';
    for (const darbuotojas of darbuotojai) {
        html += `<div class="darbuotojas">
                    <h3>${darbuotojas.vardas} ${darbuotojas.pavarde}</h3>
                    <p>Dirba ${darbuotojas.etatas} etatu</p>
                    <p><strong>Atlyginimas:</strong> ${darbuotojas.atlyginimas}</p>
                </div>`;
    }

    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('darbuotojai');
    atsakymoBlokas.classList.remove('projektai', 'uzduotys');
}

const spausdintiUzduotis = (uzduotys) => {
    let html = '';
    for (const uzduotis of uzduotys) {
        html += `<div class="uzduotis">
                    <h3>${uzduotis.uzduotis}</h3>
                    <p><strong>Uzduoti atlikti iki:</strong> ${uzduotis.terminas}</p>
                    <p><strong>Prioritetas:</strong> ${uzduotis.prioritetas}</p>
                    <p><strong>Ar igyvendinta:</strong> ${uzduotis.ar_baigta ? 'Taip' : 'Ne'}</p>
                </div>`;
    }

    atsakymoBlokas.innerHTML = html;
    atsakymoBlokas.classList.add('uzduotys');
    atsakymoBlokas.classList.remove('projektai', 'darbuotojai');
}
