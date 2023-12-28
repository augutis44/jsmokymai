import Paslauga from "./Paslauga"
import './paslauga.css'

const Paslaugos = () => {
    return (
        <div className="services">
            <h2>Paslaugos:</h2>
            <ul>
                <li>
                    <Paslauga />
                </li>
                <li>
                    <Paslauga />
                </li>
                <li>
                    <Paslauga />
                </li>
                <li>
                    <Paslauga />
                </li>
            </ul>
        </div>
    )
}

export default Paslaugos