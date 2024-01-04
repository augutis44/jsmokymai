const Vaikinis = (props) => {
    const kavaHandler = () => {
        // alert('kava');
        props.pasikeitimas('kava');
    }
    const arbataHandler = () => {
        // alert('arbata');
        props.pasikeitimas('arbata');
    }
    const vanduoHandler = () => {
        // alert('vanduo');
        props.pasikeitimas('vanduo');
    }

    return (
        <>
            <button onClick={kavaHandler}>Kava</button>
            <button onClick={arbataHandler}>Arbata</button>
            <button onClick={vanduoHandler}>Vanduo</button>
        </>
    )
}

export default Vaikinis