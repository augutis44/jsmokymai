
const TrysSkaiciai = () => {
    let a = 5;
    let b = 15;
    let c = 7;

    const iskvSkaiciusDiv = () => {
        return (
            a, b, c
        )
    }

    const didziausiasSk = () => {
        if (a > b && a > c) {
            return a
        } else if (b > a && b > c) {
            return b
        } else {
            return c
        }
    }

    const suma = () => {
        return a + b + c;
    }

    return (
        <div>
            <h1> -------- Trys skaiciai -------- </h1>

            <p>Visi skaiciai: {iskvSkaiciusDiv()}</p>
            <p>Didziausias skaicius: {didziausiasSk()}</p>
            <p>Skaiciu suma: {suma()}</p>
        </div>
    )
}

export default TrysSkaiciai