
const EinaPrieLentos = () => {
    let students = ['Lina', 'Aldona', 'Lukas', 'Algimantas'];

    const randomStudentsHandle = () => {
        let randomStudent = students[(Math.floor(Math.random() * students.length))]
        alert(`Prie lentos eina ${randomStudent}`)
    }

    return (
        <div>
            <button onClick={randomStudentsHandle}>Atsitiktinis studentas</button>
        </div>
    )
}

export default EinaPrieLentos