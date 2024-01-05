import { useRef } from "react"

const KnygosIvedimas = (props) => {
    const bookTitleRef = useRef();
    const bookPriceRef = useRef();
    const bookYearRef = useRef();

    const newBookInf = (event) => {
        event.preventDefault();

        const newBookObj = {
            title: bookTitleRef.current.value,
            price: bookPriceRef.current.value,
            years: bookYearRef.current.value
        }

        props.sendInf(newBookObj);

        bookTitleRef.current.value='';
        bookPriceRef.current.value='';
        bookYearRef.current.value='';
    }

    return (
        <div>
            <p>Ivesti nauja knyga:</p>
            <form action="#" onSubmit={newBookInf}>
                <label htmlFor="bookTitleInput">Knygos pavadinimas</label>
                <input ref={bookTitleRef} type="text" id="bookTitleInput" />
                <br />
                <label htmlFor="bookPriceInput">Knygos kaina</label>
                <input ref={bookPriceRef} type="number" id="bookPriceInput" step="any" />
                <br />
                <label htmlFor="bookYearInput">Knygos isleidimo metai</label>
                <input ref={bookYearRef} type="number" id="bookYearInput" step="any" />
                <br />
                <button type="submit">Ivesti nauja knyga</button>
            </form>
        </div>
    )
}

export default KnygosIvedimas