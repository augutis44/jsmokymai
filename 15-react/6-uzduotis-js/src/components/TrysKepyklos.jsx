import { useState } from "react"

const TrysKepyklos = () => {
    const [uzsakymai, setUzsakymai] = useState(0);
    const [pajegumasK1, setPajegumasK1] = useState(0);
    const [pajegumasK2, setPajegumasK2] = useState(0);
    const [pajegumasK3, setPajegumasK3] = useState(0);

    const capability = () => {
        let sum = pajegumasK1 + pajegumasK2 + pajegumasK3;

        return (uzsakymai < sum ?
            'Visi uzsakymai igyvenditni' :
            `Deja, ne visi uzsakymai igyvendinti. Liko neispildyti ${uzsakymai - sum} ${uzsakymai - sum == 1 ? 'uzsakymas' : 'uzsakymai'}`)
    }

    return (
        <div>
            <h1> -------- Trys kepyklos -------- </h1>

            <label htmlFor="orders">Dienos uzsakymu kiekis: </label>
            <input type="number" name="orders" onChange={(event) => setUzsakymai(event.target.valueAsNumber)} />
            <br />

            <label htmlFor="k1">Pirma kepykla:: </label>
            <input type="number" name="k1" onChange={(event) => setPajegumasK1(event.target.valueAsNumber)} />
            <label htmlFor="k2">Antra kepykla: </label>
            <input type="number" name="k2" onChange={(event) => setPajegumasK2(event.target.valueAsNumber)} />
            <label htmlFor="k3">Trecia kepykla: </label>
            <input type="number" name="k3" onChange={(event) => setPajegumasK3(event.target.valueAsNumber)} />

            <p>{capability()}</p>

        </div>
    )
}

export default TrysKepyklos