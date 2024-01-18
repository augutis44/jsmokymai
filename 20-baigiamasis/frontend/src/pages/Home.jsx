import HomeTable from "../components/home/HomeTable";
import axios from 'axios';
import Spinner from "../components/shared/animated/Spinner";
import { useEffect, useState } from "react";

const Home = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchEmployees = () => {
        axios
            .get('http://localhost:5555/employees')
            .then((response) => {
                setEmployees(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        setLoading(true);

        fetchEmployees();
    }, []);

    return (
        <>
            {loading ? <Spinner /> : <HomeTable employees={employees} fetchEmployees={fetchEmployees} />}
        </>
    )
}

export default Home