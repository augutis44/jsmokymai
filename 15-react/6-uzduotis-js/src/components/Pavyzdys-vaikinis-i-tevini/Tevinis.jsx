import { useState } from "react";
import Vaikinis from "./Vaikinis";

const Tevinis = () => {
    const [tekstas, setTekstas] = useState('kol kas nieko');

    const apdorotiPasikeitima = (pasirinkimas) => {
        // console.log('pasirinkimas', pasirinkimas);
        setTekstas(pasirinkimas);
    }

    return (
        <div>
            <h1> -------- Vaikinis i tevini pavizdys -------- </h1>

            <h2>Tėvinis komponentas</h2>
            <Vaikinis pasikeitimas={apdorotiPasikeitima} />
            <p>Jūs pasirinkote: {tekstas}</p>
        </div>
    )
}

export default Tevinis