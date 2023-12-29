
const GeriausiasMedis = () => {
    const medzioPavadinimas = (medis) => {
        switch (medis) {
            case 'uosis':
                console.log('oho koks rimtas');
                break;

            case 'liepa':
                console.log('visai kaip mano vardas');

                break;
            case 'azuolas':
                console.log('labai mielas raštas');

                break;
        }
    }

    return (
        <div>
            <button onClick={() => medzioPavadinimas('liepa')}>Tikrinti medi</button>
            <button onClick={() => medzioPavadinimas('azuolas')}>Tikrinti medi</button>
            <button onClick={() => medzioPavadinimas('uosis')}>Tikrinti medi</button>
        </div>
    )
}

export default GeriausiasMedis