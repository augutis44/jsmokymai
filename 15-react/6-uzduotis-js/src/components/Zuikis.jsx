import { useState } from "react"

const Zuikis = () => {
    const [arPersoko, SetArPersoko] = useState(false);

    const randomBoolean = () => {
        SetArPersoko(Math.random() < 0.5)
    }

    const persoko = () => {
        SetArPersoko(true)
    }

    return (
        <div>
            <p>Ar zuikis persoko? {arPersoko ? 'Taip' : 'Ne'}</p>
            <button onClick={randomBoolean}>Ar persoko?</button>
            <button onClick={persoko}>Persokti</button>
        </div>
    )
}

export default Zuikis