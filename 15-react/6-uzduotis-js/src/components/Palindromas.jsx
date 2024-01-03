
const Palindromas = () => {
    const arPalindromas = (event) => {
        let zodis = event.target.value;

        if (zodis == zodis.split('').reverse().join('')) {
            console.log('Palindromas');
        } else {
            console.log('Ne palindromas');
        }
    }

    return (
        <div>
            <h1> -------- Palindromas -------- </h1>

            <input type="text" onChange={arPalindromas} />
        </div>
    )
}

export default Palindromas