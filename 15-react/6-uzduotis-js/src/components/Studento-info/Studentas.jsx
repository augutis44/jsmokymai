import Pazymys from "./Pazymys"

const Studentas = () => {
    const studentas = {
        vardas: 'Karolis',
        pavarde: 'Karoliauskas',
        mokykla: 'Vilniaus Universitetas',
        mokymoPrograma: 'Bioinformatika',
        pazymiai: [10, 9, 8, 10, 4, 8, 8, 8, 10]
    }

    return (
        <div>
            <h1> -------- Studentas -------- </h1>

            <p>Informacija apie studenta:</p>
            <p>{studentas.vardas} {studentas.pavarde} mokosi {studentas.mokykla} mokykloje, jis studijuoja {studentas.mokymoPrograma}.</p>
            <p>Studento pazymiai:</p>
            {studentas.pazymiai.map((pazymys, i) => <Pazymys key={i} pazymys={pazymys} />)}
        </div>
    )
}

export default Studentas