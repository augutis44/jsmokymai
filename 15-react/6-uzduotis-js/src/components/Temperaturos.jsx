import { useRef, useState } from "react";

const Temperaturos = () => {
    const [tempArr, setTempArr] = useState([])

    const tempInputRef = useRef();

    let minTemp
    let maxTemp

    const buttonHandler = () => {
        if (tempInputRef.current.value == '') {
            return
        }

        let inputValue = tempInputRef.current.valueAsNumber;
        setTempArr([...tempArr, inputValue]);
        tempInputRef.current.value = '';
    }

    const buttonDeleteHandler = () => {
        setTempArr([]);
    }

    const showTempArr = () => {
        let tempArrToDisplay = tempArr.map((temp) => temp.toString() + '°C')
        return tempArrToDisplay.join(', ')
    }

    const averageTempInDay = () => {
        let averageTemp = tempArr.reduce((sum, next) => sum + next) / tempArr.length
        return averageTemp.toFixed(0) + '°C'
    }

    const minTempInDay = () => {
        minTemp = Math.min(...tempArr);
        return minTemp + '°C'
    }

    const maxTempInDay = () => {
        maxTemp = Math.max(...tempArr);
        return maxTemp + '°C'
    }

    const differanceTempInDay = () => {
        let differance = Math.abs(maxTemp) - Math.abs(minTemp)
        return differance + '°C'
    }

    return (
        <div>
            <h1> -------- Temperaturos -------- </h1>

            <label htmlFor="temp"></label>
            <input ref={tempInputRef} type="number" name="temp" />
            <button onClick={buttonHandler}>Isvesti temperatura</button>
            {tempArr.length != 0 && <button onClick={buttonDeleteHandler}>Istrinti duomenis</button>}


            {tempArr.length == 0 ? <p>Duomenu nera.</p> : <p>Is viso uzfiksuota {tempArr.length} temperaturu pokyciu.</p>}

            {tempArr.length != 0 && <>
                <p>Temperaturos sia diena: {showTempArr()}</p>
                <p>Vidutine dienos temperatura: {averageTempInDay()} </p>
                <p>Zemiausia dienos temperatura: {minTempInDay()}</p>
                <p>Auksciausia dienos temperatura: {maxTempInDay()}</p>
                <p>Skirtumas tarp auksciausios ir maziausios temperaturos: {differanceTempInDay()}</p>
            </>}

        </div>
    )
}

export default Temperaturos