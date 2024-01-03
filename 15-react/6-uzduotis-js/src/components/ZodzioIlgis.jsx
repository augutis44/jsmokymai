
const ZodzioIlgis = () => {
    let zodis = "zodis";

    const zodzioIlgis = () => {
        return zodis.length
    }

    return (
        <div>
            <h1> -------- Zodzio ilgis -------- </h1>

            <p>{zodis}</p>
            <p>zodzio ilgis: {zodzioIlgis()}</p>
        </div>
    )
}

export default ZodzioIlgis