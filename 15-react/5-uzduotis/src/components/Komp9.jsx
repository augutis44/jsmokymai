// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
    const mokymai = [
        {
            pavadinimas: 'Javascript dieniniai mokymai',
            trukme: 6,
            kaina: 3000
        },
        {
            pavadinimas: 'Javascript vakariniai mokymai',
            trukme: 8,
            kaina: 2500
        },
        {
            pavadinimas: 'Javascript full-stack mokymai',
            trukme: 12,
            kaina: 3500
        },

    ]

    return (
        <div>
            {mokymai.map((mokymas, i) =>
                <div key={i}>
                    <h3>{mokymas.pavadinimas}</h3>
                    <p>Mokymu trukme: {mokymas.trukme}</p>
                    <p>Mokymu kaina: {mokymas.kaina}eur</p>
                </div>
            )}
        </div>
    )
}

export default Komp9
