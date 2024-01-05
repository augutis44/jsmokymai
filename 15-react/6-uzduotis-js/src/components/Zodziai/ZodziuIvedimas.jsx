import { useRef } from "react";

const ZodziuIvedimas = (props) => {
    const inputoRef = useRef();

    const newWordSubmit = (event) => {
        event.preventDefault();

        if (inputoRef.current.value == '') {
            return
        }

        props.newWord(event.target[0].value);

        event.target[0].value = '';
    }

    return (
        <div>
            <form action="#" onSubmit={newWordSubmit}>
                <label htmlFor="wordInput">Ivesti nauja zodi:</label>
                <input ref={inputoRef} type="text" id="wordInput" />
                <button type="submit">Ivesti zodi</button>
            </form>
        </div>
    )
}

export default ZodziuIvedimas