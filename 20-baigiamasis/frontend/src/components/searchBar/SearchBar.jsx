import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ employees, setResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (value) => {

        const result = employees.filter((employee) => {
            const firstNameMatch = employee &&
                employee.firstName &&
                employee.firstName.toLowerCase().startsWith(value);

            const lastNameMatch = employee &&
                employee.lastName &&
                employee.lastName.toLowerCase().startsWith(value);

            return firstNameMatch || lastNameMatch
        });

        setResults(result);

    };

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