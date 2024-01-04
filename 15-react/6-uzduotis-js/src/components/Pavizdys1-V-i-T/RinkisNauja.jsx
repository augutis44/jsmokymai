
const RinkisNauja = (props) => {
    const number0 = () => {
        props.guessedNumber(0);
    }

    const number1 = () => {
        props.guessedNumber(1);
    }

    const number2 = () => {
        props.guessedNumber(2);
    }

    const number3 = () => {
        props.guessedNumber(3);
    }

    const number4 = () => {
        props.guessedNumber(4);
    }

    return (
        <div>
            <button onClick={number0}>0</button>
            <button onClick={number1}>1</button>
            <button onClick={number2}>2</button>
            <button onClick={number3}>3</button>
            <button onClick={number4}>4</button>
        </div>
    )
}

export default RinkisNauja