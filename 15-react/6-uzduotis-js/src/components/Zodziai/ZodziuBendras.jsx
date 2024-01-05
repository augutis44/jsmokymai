import { useState } from "react"
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
    const [words, setWords] = useState([]);

    const getNewWord = (newWordValue) => {
        setWords([...words, newWordValue]);
    }

    return (
        <div>
            <h1> -------- Zodziai -------- </h1>
            {words.length != 0 &&
                <ul>
                    {words.map((word, i) => <li key={i}>{word}</li>)}
                </ul>
                ||
                <p>Duomenu nera</p>}
            < br />
            <ZodziuIvedimas newWord={getNewWord} />
        </div>
    )
}

export default ZodziuBendras;