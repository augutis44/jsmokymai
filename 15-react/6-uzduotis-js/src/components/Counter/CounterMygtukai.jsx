
const CounterMygtukai = (props) => {
    const addCount = (event) => {
        let numberToAdd = event.target.textContent.split(' ');
        props.sendCount(Number(numberToAdd[1]))
    }

    return (
        <div>
            <button onClick={addCount}>+ 1</button>
            <button onClick={addCount}>+ 2</button>
            <button onClick={addCount}>+ 5</button>
        </div>
    )
}

export default CounterMygtukai