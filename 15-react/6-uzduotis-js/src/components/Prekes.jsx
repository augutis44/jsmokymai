import { useRef, useState } from "react"

const Prekes = () => {
    const [items, setItems] = useState([]);

    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    const itemQuantityRef = useRef();


    const newItemHandler = (event) => {
        event.preventDefault();

        setItems([...items, {
            name: itemNameRef.current.value,
            price: itemPriceRef.current.value,
            quantity: itemQuantityRef.current.value
        }
        ])

        itemNameRef.current.value = '';
        itemPriceRef.current.value = '';
        itemQuantityRef.current.value = '';
    }

    const deleteItems = () => {
        setItems([]);
    }

    return (
        <div>
            <h1> -------- Prekes -------- </h1>

            <p>Informacija apie nauja preke:</p>
            <form action="#" onSubmit={newItemHandler}>
                <label htmlFor="itemName">Prekes pavadinimas</label>
                <input ref={itemNameRef} type="text" id="itemName" />
                <br />
                <label htmlFor="itemPrice">Kaina</label>
                <input ref={itemPriceRef} type="number" id="itemPrice" />
                <br />
                <label htmlFor="itemQuantity">Kiekis</label>
                <input ref={itemQuantityRef} type="number" id="itemQuantity" />
                <br />
                <button type="submit">Ivesti</button>

                {items.length != 0 && <button onClick={deleteItems}>Istrinti visas prekes</button>}
            </form>

            {items.length != 0 && <div>
                {items.map((item, i) =>
                    <div key={i}>
                        <h3>{item.name}</h3>
                        <p>Prekes kaina: {item.price}$</p>
                        <p>Likutis: {item.quantity} vnt.</p>
                    </div>
                )}
            </div> || <p>Nera ivestu prekiu</p>}

            <h2>Mazi siu prekiu likuciai:</h2>
            {items.length != 0 && <div>
                {items.filter((item) =>
                    item.quantity < 5).map((filteredItem, i) =>
                        <div key={i}>
                            <h3>{filteredItem.name}</h3>
                            <p>Prekes kaina: {filteredItem.price}$</p>
                            <p>Likutis: {filteredItem.quantity} vnt.</p>
                        </div>)
                }
            </div>}
        </div >
    )
}

export default Prekes