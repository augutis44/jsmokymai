
import { useState } from "react"

const Zodis = () => {
    const [zodis, setZodis] = useState('')

    const keistiZodiPomidoras = () => {
        setZodis('pomidoras')
    }

    const keistiZodiAgurkas = () => {
        setZodis('agurkas')
    }

    return (
        <div>
            <h1> -------- Zodis -------- </h1>

            <p>{zodis}</p>
            <button onClick={keistiZodiPomidoras}>Pomidoras</button>
            <button onClick={keistiZodiAgurkas}>Agurkas</button>

        </div>
    )
}

export default Zodis