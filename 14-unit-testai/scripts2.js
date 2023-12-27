const apskritimoPlotas = (r) => {
    let s = Math.PI * (r * r);
    return Number(s.toFixed(4));
}

module.exports = apskritimoPlotas;

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr
}

palindrome("A man, a plan, a canal. Panama")

module.exports = palindrome;


