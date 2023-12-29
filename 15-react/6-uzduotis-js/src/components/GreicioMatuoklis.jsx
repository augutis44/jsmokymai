import { useState } from "react"

const GreicioMatuoklis = () => {
    const [greitis, setGreitis] = useState(0);
    const [koksGreitis, setKoksGreitis] = useState('stovite');


    const nustatytiGreiti = (naujasGreitis) => {
        setGreitis(naujasGreitis);
        kaipVaziuojate(naujasGreitis);
    }

    const kaipVaziuojate = (naujasGreitis) => {
        switch (naujasGreitis) {
            case 0:
                setKoksGreitis('stovite');
                break;
            case 10:
            case 50:
                setKoksGreitis('vaziuojate letai');
                break;
            case 100:
            case 120:
                setKoksGreitis('vaziuojate greitai');
                break;
        }
    }

    return (
        <div>
            <p>{greitis} km/h</p>
            <p>{koksGreitis}</p>
            <button onClick={() => nustatytiGreiti(0)}>0km/h</button>
            <button onClick={() => nustatytiGreiti(10)}>10km/h</button>
            <button onClick={() => nustatytiGreiti(50)}>50km/h</button>
            <button onClick={() => nustatytiGreiti(100)}>100km/h</button>
            <button onClick={() => nustatytiGreiti(120)}>120km/h</button>
        </div>
    )
}

export default GreicioMatuoklis