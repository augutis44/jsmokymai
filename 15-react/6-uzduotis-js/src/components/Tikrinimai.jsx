
const Tikrinimai = () => {
    let randomNum = Math.floor(Math.random() * 51);

    const arLyginisHandle = () => {
        return randomNum % 2 == 0 ? alert('Skaicius lyginis') : alert('Skaicius nelyginis')
    }

    const arDidesnisHandle = () => {
        return randomNum > 30 ? alert('Skaicius didesnis uz 30') : alert('Skaicius mazesnis uz 30')
    }

    const arPirminisHandle = () => {
            for (let i = 2, s = Math.sqrt(randomNum); i <= s; i++)
              if (randomNum % i === 0) return alert('Skaicius nera pirminis');
              return alert('Skaicius pirminis')
    }


    return (
        <div>
            <button onClick={arLyginisHandle}>Ar lyginis skaicius?</button>
            <button onClick={arDidesnisHandle}>Ar skaicius didesnis uz 30?</button>
            <button onClick={arPirminisHandle}>Ar pirminis?</button>
        </div>
    )
}

export default Tikrinimai