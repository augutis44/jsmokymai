
const Skaicius = () => {
    let skaicius = -16;

    const arLyginis = () => {
        return skaicius % 2 == 0 ? 'Taip' : 'Ne';
    }

    const arTeigiamas = () => {
        return skaicius > 0 ? 'Taip' : 'Ne';
    }

    return (
        <div>
            <p>Duotas skaicius: {skaicius}</p>
            <p>Ar skaicius yra lyginis? {arLyginis()}</p>
            <p>Ar skaicius yra teigiamas? {arTeigiamas()}</p>
        </div>
    )
}

export default Skaicius