
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
            <input type="text" onChange={arPalindromas} />
        </div>
    )
}

export default Palindromas