import { useState, useEffect } from "react";
import RinkisNauja from "./RinkisNauja"

const Skaiciai2 = () => {
    const [spejimasSkai, setSpejimasSkai] = useState('kol kas nieko nespejote');
    const [randomNum, setRandomNum] = useState(null);

    useEffect(() => {
        const newRandomNum = Math.floor(Math.random() * 4);
        setRandomNum(newRandomNum);
    }, []);

    const apdorotiSpejima = (spejimas) => {
        if (spejimas == randomNum) {
            return setSpejimasSkai('Atspejote');
        } else {
            setSpejimasSkai('Neatspejote');
        }
    }

    return (
        <div>
            <h1> -------- Skaiciai -------- </h1>

            <p>Spekite skaiciu</p>
            <RinkisNauja guessedNumber={apdorotiSpejima} />
            <p>{spejimasSkai}</p>
        </div>
    )
}

export default Skaiciai2