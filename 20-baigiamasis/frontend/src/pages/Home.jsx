import NavBar from "../components/shared/navigation/NavBar";
import HomeTable from "../components/home/HomeTable";
import axios from 'axios';
import Spinner from "../components/shared/animated/Spinner";
import { useEffect, useState } from "react";

const Home = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios
            .get('http://localhost:5555/employees')
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    return (
        <>
            <NavBar />
            {loading ? <Spinner /> : <HomeTable employees={employees} />}

        </>
    )
}

export default Home