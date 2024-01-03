import { useState, useRef } from "react"

const Skaicius2 = () => {
    const [number, setNumber] = useState('');

    const numberInputRef = useRef();

    const setNumberHandler = () => {
        setNumber(numberInputRef.current.value);
        numberInputRef.current.value = '';
    }

    const showNumb = () => {
        return number
    }

    const isPositive = () => {
        return number > 0 ? 'teigiamas' : 'neigiamas';
    }

    const isEqual = () => {
        return number % 2 == 0 ? 'teigiamas' : 'neigiamas';
    }

    return (
        <div>
            <h1> -------- Skaicius 2 -------- </h1>

            <label htmlFor="someNumb"></label>
            <input ref={numberInputRef} type="number" name="someNumb" />
            <button onClick={setNumberHandler}>Isvesti skaiciu</button>

            {number && <>
                <p>Pasirinktas skaicius: {showNumb()}</p>
                <p>Pasirinktas skaicius yra {isPositive()}</p>
                <p>Pasirinktas skaicius yra {isEqual()}</p>
            </>}

        </div>
    )
}

export default Skaicius2