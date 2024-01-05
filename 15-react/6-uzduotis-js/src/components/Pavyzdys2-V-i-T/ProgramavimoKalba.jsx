const ProgramavimoKalba = (props) => {
    const rinktisHandler = (event) => {
        // console.log('mygtuko tekstas:', event.target.textContent);

        // čia yra išsiunčiama informacija į komponentą kuris iškvietė šį komponentą
        // tėvinis komponentas pasiims šią informaciją ir ją apdoros
        // pasiims per argumentą "issiuntimas"
        // props.issiuntimas('grazinu informacija is vaikinio komponento');
        props.issiuntimas(event.target.textContent);
    }

    return (
        <div>
            <button onClick={rinktisHandler}>JavaScript</button>
            <button onClick={rinktisHandler}>C#</button>
            <button onClick={rinktisHandler}>PHP</button>
        </div>
    )
}

export default ProgramavimoKalba