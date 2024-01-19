import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({
    searchValue,
    setSearchValue
}) => {

    const clearSearch = () => {
        setSearchValue('');
    }

    return (
        <div className="flex gap-2 items-center bg-white p-1 pl-3 pr-3 rounded-md">
            <FaSearch className="text-xl" />
            <input
                placeholder="Search employee..."
                className="p-1 focus:outline-none"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={clearSearch}>
                <IoMdClose className="text-xl" />
            </button>
        </div>
    )
}

export default SearchBar