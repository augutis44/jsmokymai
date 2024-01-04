import Salis from "./Salis"

const Pasaulis = () => {
    const salys = [
        {
            salis: 'Lietuva',
            zemynas: 'Europa'
        },
        {
            salis: 'Kinija',
            zemynas: 'Azija'
        },
        {
            salis: 'Australija',
            zemynas: 'Australija'
        },
        {
            salis: 'Egiptas',
            zemynas: 'Afrika'
        }
    ]

    return (
        <div>
            <h1> -------- Pasaulio info -------- </h1>

            {salys.map((salis, i) => <Salis key={i} salis={salis.salis} zemynas={salis.zemynas} />)}
        </div>
    )
}

export default Pasaulis