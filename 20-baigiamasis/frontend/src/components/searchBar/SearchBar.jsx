import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (value) => {

        fetch(`http://localhost:5555/employees`)
            .then((response) =>
                response.json()
            ).then((json) => {
                const result = json.filter((employee) => {
                    const firstNameMatch = employee &&
                        employee.firstName &&
                        employee.firstName.toLowerCase().startsWith(value);

                    const lastNameMatch = employee &&
                        employee.lastName &&
                        employee.lastName.toLowerCase().startsWith(value);

                    return firstNameMatch || lastNameMatch
                });

                setResults(result);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleChange = (value) => {
        setSearchValue(value);
        fetchData(value);
    }

    return (
        <div className="flex gap-2 items-center bg-white p-1 pl-3 rounded-md">
            <FaSearch className="text-xl" />
            <input
                placeholder="Type to search..."
                className="p-1 focus:outline-none"
                value={searchValue}
                onChange={(event) => handleChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBar