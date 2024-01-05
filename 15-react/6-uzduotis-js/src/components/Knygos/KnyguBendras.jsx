import { useState } from "react"
import KnygosIvedimas from "./KnygosIvedimas";

const KnyguBendras = () => {
    let booksArr = [


    ]

    const [books, setBooks] = useState(booksArr);

    const takeNewBookInf = (newBookObjValue) => {
        setBooks([...books, newBookObjValue]);

    }

    const deleteBooks = () => {
        setBooks([]);
    }

    return (
        <div>
            <h1> -------- Knygos -------- </h1>

            <KnygosIvedimas sendInf={takeNewBookInf} />
            {books.length != 0 &&
                <button onClick={deleteBooks}>Isvalyti visas knygas</button>}

            {books.length != 0 &&
                <div>
                    {books.map((book, i) =>
                        <div key={i}>
                            <h3>{book.title}</h3>
                            <p>Knygos kaina: {book.price}</p>
                            <p>Knygos isleidimo metai: {book.years}</p>
                        </div>
                    )}
                </div> || <p>Siuo metu nera ivestu knygu</p>}

        </div>
    )
}

export default KnyguBendras