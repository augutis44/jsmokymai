
const LyginisArNe = () => {
    const arLyginis = (event) => {
        let numberInInput = event.target.valueAsNumber;
        if (numberInInput % 2 == 0) {
            console.log('lyginis');
        } else {
            console.log('nelyginis');
        }
    }

    return (
        <div>
            <input type="number" onChange={arLyginis} />
        </div>
    )
}

export default LyginisArNe