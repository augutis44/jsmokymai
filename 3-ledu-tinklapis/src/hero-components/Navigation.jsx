import './Navigation.css'

const Navigation = () => {

    return (
        <div className="navigationFull">
            <div className="navigation borderBox">
                <a href="#" className="logoA"><img src="images/logo.svg" alt="comapny logo"></img></a>
                <ul>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Products</a> </li>
                    <li> <a href="#">Blog</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
