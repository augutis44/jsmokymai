import DarbuotojasImoneje from "./DarbuotojasImoneje"

const Imone = () => {

    const darbuotojai = [
        {
            vardas: 'Karolis',
            pavarde: 'Karoliauskas',
            bonusas: 500
        },
        {
            vardas: 'Lukas',
            pavarde: 'Lukauskas',
            bonusas: 450
        },
        {
            vardas: 'Marius',
            pavarde: 'Mariauskas',
            bonusas: 100
        },
        {
            vardas: 'Kriste',
            pavarde: 'Kristauskaite',
            bonusas: 0
        },
    ]

    return (
        <div>
            <h1> -------- Imone -------- </h1>

            {darbuotojai.map((darbuotojas, i) => <DarbuotojasImoneje
                key={i}
                vardas={darbuotojas.vardas}
                pavarde={darbuotojas.pavarde}
                bonusas={darbuotojas.bonusas}
            />
            )}

        </div>
    )
}

export default Imone