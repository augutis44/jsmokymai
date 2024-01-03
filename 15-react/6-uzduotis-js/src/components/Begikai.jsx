import { useState } from "react"

const Begikai = () => {
    const [pirmolaikas, setPirmoLaikas] = useState(0);
    const [antrolaikas, setAntroLaikas] = useState(0);

    const kurisGreitesnis = () => {
         return pirmolaikas > antrolaikas ? "Pirmas begikas greitesnis" : "Antras begikas greitesnis";
    }

    const inputLaikoSaugojimas = (event, begikolaikas) => {
        begikolaikas(event.target.valueAsNumber);
    }

    return (
        <div>
            <h1> -------- Begikai -------- </h1>

            <p>Pirmo begiko laikas:</p>
            <input type="number" onChange={(event) => inputLaikoSaugojimas(event, setPirmoLaikas)} />
            <p>Antro begiko laikas:</p>
            <input type="number" onChange={(event) => inputLaikoSaugojimas(event, setAntroLaikas)} />
            <p>{kurisGreitesnis()}</p>
        </div>
    )
}

export default Begikai