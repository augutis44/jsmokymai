import { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
    const [sum, setSum] = useState(0)

    const catchInfoHandler = (addCountInfo) => {
        setSum(sum + addCountInfo);
    }

    return (
        <div>
            <h1> -------- Counter -------- </h1>

            <CounterMygtukai sendCount={catchInfoHandler} />
            <p>Mygtukas buvo paspaustas <span>{sum}</span> kartu.</p>
        </div>
    )
}

export default CounterTev