
const PrekiuKrepselis = () => {
    const prekiuKrepselis = [
        {
            id: 1,
            pavadinimas: "Piestukas",
            kaina: 1.99,
            kiekis: 5,
            nuolaida: 0.99
        },
        {
            id: 2,
            pavadinimas: "Trintukas",
            kaina: 2.99,
            kiekis: 15,
            nuolaida: 0.99
        },
        {
            id: 3,
            pavadinimas: "Tusinukas",
            kaina: 5.99,
            kiekis: 7,
            nuolaida: 0.99
        }
    ]

    const duomenysLenteleje = (prekes) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Pavadinimas</th>
                        <th>Kaina</th>
                        <th>Kiekis</th>
                        <th>Nuolaida</th>
                    </tr>
                    {prekes.map((preke) =>
                        <tr key={preke.id}>
                            <td>{preke.pavadinimas}</td>
                            <td>{preke.kaina}</td>
                            <td>{preke.kiekis}</td>
                            <td>{preke.nuolaida}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const nuolaida = () => {
        let suma = prekiuKrepselis.reduce((sum, next) => sum + next.nuolaida, 0)

        return suma
    }

    const bendraKaina = () => {
        let suma = prekiuKrepselis.reduce((sum, next) => sum + ((next.kaina - next.nuolaida) * next.kiekis), 0)

        return suma
    }

    const virsijaKainosRiba = (kainosRiba) => {
        let kainaDidesne = prekiuKrepselis.filter(preke => preke.kaina >= kainosRiba)
        let kainaDidesneArr = kainaDidesne.map(kaina => kaina.pavadinimas)

        return <>
            Prekes, kuriu kaina didesne arba lygi {kainosRiba}eur: {kainaDidesneArr.join(', ')}
        </>
    }

    return (
        <div>
            <h1> -------- Prekiu krepselis -------- </h1>

            {duomenysLenteleje(prekiuKrepselis)}
            <p>Viso gaunama nuolaida: {nuolaida()}eur</p>
            <p>Viso prekiu kaina: {bendraKaina()}</p>
            {virsijaKainosRiba(2)}
        </div >
    )
}

export default PrekiuKrepselis