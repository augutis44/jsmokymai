const DarbuotojasImoneje = ({ vardas, pavarde, bonusas }) => {

    const koksDydisBonuso = () => {
        if (bonusas == 0) {
            return 'Gaila ☹'
        } else if (bonusas <= 100) {
            return 'Bent ant kebabo užmetė..'
        } else {
            return 'Nu, jau kažkas geriau.'
        }
    }

    return (
        <div>
            <p>Darbuotojas {vardas} {pavarde} gaus {bonusas} euru dydzio kaledini bonusa. {koksDydisBonuso()}</p>

        </div>
    )
}

export default DarbuotojasImoneje