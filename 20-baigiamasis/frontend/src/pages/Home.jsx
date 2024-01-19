import HomeTable from "../components/home/HomeTable";
import axios from 'axios';
import { useEffect, useState } from "react";

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState(
        {
            fieldName: "firstName",
            order: 1
        }
    )

    //turi priimti filter 
    const fetchEmployees = () => {
        axios
            .post('http://localhost:5555/employees/get', { filter, searchValue })
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {

        fetchEmployees();
    }, [filter, searchValue]);

    return (
        <>
            <HomeTable
                employees={employees}
                fetchEmployees={fetchEmployees}
                setFilter={setFilter}
                filter={filter}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </>
    )
}

export default Home