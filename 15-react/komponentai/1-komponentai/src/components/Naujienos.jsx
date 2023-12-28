import Naujiena from "./Naujiena"
import "./Naujienos.css"

const Naujienos = () => {
    return (
        <div className="naujienu-wrapper">
            <h2>Naujienos</h2>
            <div className="naujienu-list">
                <Naujiena />
                <Naujiena />
                <Naujiena />
                <Naujiena />
            </div>
        </div>
    )
}

export default Naujienos