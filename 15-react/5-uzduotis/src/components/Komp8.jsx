// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
    const salys = [
        {
            pavadinimas: 'Lietuva',
            sostine: 'Vilnius',
            gyvSkaicius: 3000000
        },
        {
            pavadinimas: 'Latvija',
            sostine: 'Ryga',
            gyvSkaicius: 2500000
        },
        {
            pavadinimas: 'Estija',
            sostine: 'Talinas',
            gyvSkaicius: 3500000
        },

    ]

    return (
        <div>
            {salys.map((salis, i) =>
                <div key={i}>
                    <h3>{salis.pavadinimas}</h3>
                    <p>Salies sostine: {salis.sostine}</p>
                    <p>Salyje gyvena {salis.gyvSkaicius} zmoniu</p>
                </div>
            )}
        </div>
    )
}

export default Komp8
