
const Sansas = () => {
    let randomNum = Math.floor(Math.random() * 11);

    const randomNumberHandle = () => {
        return randomNum <= 5 ? alert('Laimejote') : alert('Pralaimejote')
    }

    return (
        <div>
            <button onClick={randomNumberHandle}>Atsitiktinis laimejimas</button>
        </div>
    )
}

export default Sansas