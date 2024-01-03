
const Laimejimas = () => {
    const laimetiHandle = () => {
        alert('Laimejote 100 euru!!!')
    }

    return (
        <div>
            <h1> -------- Laimejimas -------- </h1>

            <h1>Laimejimas</h1>
            <button onClick={laimetiHandle}>Laimekite paspaude!</button>
        </div>
    )
}

export default Laimejimas