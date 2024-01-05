import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
    const [kalba, setKalba] = useState('---');

    const gautosInfoHandler = (gautaInfo) => {
        // čia gavau programavimo kalbos pavadinimą, jis įdėtas į gautaInfo
        // console.log(gautaInfo);

        // jeigu gavau, galiu įdėti į kalba kintamąjį
        setKalba(gautaInfo);
    }

    const tikrinimas = () => {
        if (kalba === 'JavaScript') {
            return 'jėga';
        } else if (kalba === 'C#') {
            return 'rimtuolis';
        } else if (kalba === 'PHP') {
            return 'nemirštanti';
        } else {
            return '';
        }
    }

    // pagaunam jeigu kažkas įvyksta su "issiuntimas"
    // ir iškviečiam gautosInfoHandler funkciją
    return (
        <div>
            <h2>Renkamės programavimo kalbą</h2>
            <ProgramavimoKalba issiuntimas={gautosInfoHandler} />
            <p>Jūs pasirinkote: {kalba}</p>
            {
                tikrinimas() !== '' &&
                <p>{tikrinimas()}</p>
            }
        </div>
    )
}

export default Renkames