
const Darbuotojas = () => {
    const darbuotojas = {
        vardas: "Karolis",
        profesija: "Programuotojas",
        atlyginimas: 5000,
        etatas: 1,
        darboStazas: 5
    }

    const uzdarbis = () => {
        return darbuotojas.atlyginimas * (darbuotojas.darboStazas * 12) * darbuotojas.etatas
    }

    const ilgametisDarbuotojas = () => {
        return darbuotojas.darboStazas >= 5 ? 'Ilgametis' : 'Naujokas'
    }

    const atlyginimoDydis = (atlyginimas) => {
        let arDaugiau = darbuotojas.atlyginimas >= atlyginimas ? 'Lygiai/daugiau' : 'Maziau'

        return (
            <p>Ar darbuotojas uzdirba daugiau nei {atlyginimas} ? {arDaugiau}</p>

        )
    }

    return (
        <div>
            <p>Darbuotojas: {darbuotojas.vardas}</p>
            <p>Profesija: {darbuotojas.profesija}</p>
            <p>Atlyginimas: {darbuotojas.atlyginimas}eur</p>
            <p>Etatas: {darbuotojas.etatas}</p>
            <p>Darbo stazas: {darbuotojas.etdarboStazasatas} metai</p>

            <p>Darbuotojas per visus darbo metus uzdirbo: {uzdarbis()}</p>

            <p>Ar darbuotojas ilgametis? {ilgametisDarbuotojas()}</p>

            {atlyginimoDydis(3000)}

        </div>
    )
}

export default Darbuotojas