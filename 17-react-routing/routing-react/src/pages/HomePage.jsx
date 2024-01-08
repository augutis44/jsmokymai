import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
      <header>
        <h1>Statytojas A</h1>
        <p>Patys geriausi nuo ...</p>
        <Link to="/services">Kuo galime padėti</Link>
      </header>
    </div>
  )
}

export default HomePage;