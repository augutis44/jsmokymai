import { useRef, useState } from "react"

const Kelione = () => {
    const [distance, setDistance] = useState('');
    const [consumption, setConsumption] = useState('');
    const [pricePerLiter, setPricePerLiter] = useState('');

    const distanceRef = useRef();
    const consumptionRef = useRef();
    const pricePerLiterRef = useRef();

    let fuelConsumed

    const setInformationHandler = () => {
        setDistance(distanceRef.current.valueAsNumber);
        setConsumption(consumptionRef.current.valueAsNumber);
        setPricePerLiter(pricePerLiterRef.current.valueAsNumber);

        distanceRef.current.value = '';
        consumptionRef.current.value = '';
        pricePerLiterRef.current.value = '';
    }

    const outputInformation = () => {
        return `Keliones distancija yra: ${distance}. Masinos vidutines sanaudos yra: ${consumption}. Kuro kaina uz litra yra: ${pricePerLiter}.`
    }

    const fuelConsumption = () => {
        fuelConsumed = distance * (consumption / 100);
        return `Siai kelionei prireiks ${fuelConsumed} litru kuro.`;
    }

    const fuelPrice = () => {
        let price = fuelConsumed * pricePerLiter;
        return `Sios keliones kuro kaina bus ${price} eurai.`;
    }

    return (
        <div>
            <h1> -------- Kelione -------- </h1>

            <label htmlFor="distance">Kiek km reikes nuvaziuoti?</label>
            <input ref={distanceRef} type="number" name="distance" />
            <br />
            <label htmlFor="consumption">Kokios automobilio vidutines sanaudos?</label>
            <input ref={consumptionRef} type="number" name="consumption" />
            <br />
            <label htmlFor="pricePerLiter">Kokia kuro kaina uz litra?</label>
            <input ref={pricePerLiterRef} type="number" name="pricePerLiter" />
            <br />

            <button onClick={setInformationHandler}>Skaiciuoti</button>

            {distance && consumption && pricePerLiter && <>
                <p>{outputInformation()}</p>
                <p>{fuelConsumption()}</p>
                <p>{fuelPrice()}</p>
            </>
            }

        </div>
    )
}

export default Kelione