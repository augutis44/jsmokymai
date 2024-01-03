import { useState } from "react";

const Vistos = () => {
    const [eggsPerDay, setEggsPerDay] = useState(0);

    const ordersPerDay = 25;

    const checkIfOrdersComp = () => {
        let eggsShort = ordersPerDay - eggsPerDay;

        if (ordersPerDay > eggsPerDay) {
            return `Deja, pritrukome ${eggsShort} ${eggsShort == 1 ? 'kiausinio' : 'kiausiniu'}`
        } else {
            return `Ispildeme visus uzsakymus`
        }
    }

    return (
        <div>
            <h1> -------- Vistos -------- </h1>

            <label htmlFor="eggsInput">Per diena vistos padejo kiausiniu: </label>
            <input type="number" name="eggsInput" onChange={(event) => setEggsPerDay(event.target.valueAsNumber)} />
            <p>{checkIfOrdersComp()}</p>
        </div>
    )
}

export default Vistos