const Trecias = () => {
    let stiliai = {
        backgroundColor: 'red',
        color: 'white'
    };

    // būtinai du {{  }} jeigu rašome stilių iškart elemente
    return (
        <>
            <div style={{backgroundColor: 'lightcoral', color: 'white'}}>Trecias</div>
            <div style={stiliai}>Trecias</div>
        </>
    )
}

export default Trecias
