
const Salis = ({ salis, zemynas }) => {
    const isEurope = () => {
        return zemynas == 'Europa' ? <p>jega</p> : null
    }

    return (
        <div>
            <h1>{salis}</h1>
            <h3>{zemynas}</h3>
            {isEurope()}
        </div>
    )
}

export default Salis