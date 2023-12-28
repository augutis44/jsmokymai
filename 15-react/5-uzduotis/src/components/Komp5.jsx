// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
    let spalvos = ['raudona', 'geltona', 'žalia', 'mėlyna', 'violetinė'];

    return (
        // TODO: atvaizduokite visas spalvas
        // naudodami map funkciją, įdėdami viską
        // į rikiuotą sąrašą (ol)
        <div>
            <ol>
                {spalvos.map((spalva, i) =>
                    <li key={i}> {spalva} </li>
                )}
            </ol>
        </div>
    )
}

export default Komp5
