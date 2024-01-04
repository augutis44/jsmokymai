
const Pazymys = ({ pazymys }) => {
    const arTeigiamas = () => {
        return pazymys >= 5 ? 'teigiamas' : 'neigiamas'
    }

    return (
        <>
            <p>{pazymys} {arTeigiamas()}</p>
        </>
    )
}

export default Pazymys