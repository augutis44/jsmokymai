
const Skaiciai = () => {
    let arr = [1, 2, 5, 8, 9, 6, 4, 1, 2, 3];

    const sumHandle = () => {
        let sum = arr.reduce((sum, next) => sum + next)
        alert(`Numbers sum is ${sum}`)
    }

    const biggestNumberHandle = () => {
        let biggestNum = Math.max(...arr)
        alert(`Biggest number is ${biggestNum}`)
    }

    return (
        <div>
            <button onClick={sumHandle}>Skaiciuoti suma</button>
            <button onClick={biggestNumberHandle}>Didziausias skaicius </button>
        </div>
    )
}

export default Skaiciai