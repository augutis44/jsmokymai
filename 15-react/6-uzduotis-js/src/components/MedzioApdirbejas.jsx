import { useRef, useState } from "react";

const MedzioApdirbejas = () => {
    const [price, setPrice] = useState('');
    const [hours, setHours] = useState('');
    const [earnings, setEarningsr] = useState('');

    const priceRef = useRef();
    const hoursRef = useRef();
    const earningsRef = useRef();

    let cost

    const setInformationHandler = () => {
        setPrice(priceRef.current.valueAsNumber);
        setHours(hoursRef.current.valueAsNumber);
        setEarningsr(earningsRef.current.valueAsNumber);

        priceRef.current.value = '';
        hoursRef.current.value = '';
        earningsRef.current.value = '';
    }

    const outputInformation = () => {
        return `Medziagu kaina buvo: ${price}. Vienas zmogus dirbo ${hours} valandu prie sio projekto. Zmogaus vidutinis uzdarbis: ${earnings}.`
    }

    const totalCost = () => {
        cost = price + (hours * earnings);
        return cost
    }

    const profit = () => {
        let profitPrice = cost * 1.30;
        return profitPrice
    }

    return (
        <div>
            <h1> -------- Medzio Apdirbejas -------- </h1>

            <label htmlFor="price">Kokios medziagu kainos?</label>
            <input ref={priceRef} type="number" name="price" />
            <br />
            <label htmlFor="hours">Kiek valandu dirbta prie projekto?</label>
            <input ref={hoursRef} type="number" name="hours" />
            <br />
            <label htmlFor="earnings">Koks valandinis uzdarbis?</label>
            <input ref={earningsRef} type="number" name="earnings" />
            <br />

            <button onClick={setInformationHandler}>Skaiciuoti</button>

            {price && hours && earnings &&
                <>
                    <p>{outputInformation()}</p>
                    <p>Bendros projekto islaidos: {totalCost()} euru.</p>
                    <p>Norint gauti pelna uz projekta, ji reikia aprduoti uz {profit()} euru.</p>
                </>
            }
        </div>
    )
}

export default MedzioApdirbejas