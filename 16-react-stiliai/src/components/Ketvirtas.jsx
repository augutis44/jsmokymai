import './Ketvirtas.css';

const Ketvirtas = () => {
    let skaicius = 3;

    const dinamineKlase = () => {
        if (skaicius % 2 == 0) {
            return 'pritaikyta-raudona'
        } else {
            return 'pritaikyta-melyna'
        }
    }

    return (
        <div>
            <p className={skaicius % 2 == 0 ? 'pritaikyta-raudona' : 'pritaikyta-melyna'}>{skaicius}</p>
            <p className={dinamineKlase()}>{skaicius}</p>
        </div>
    )
}

export default Ketvirtas
