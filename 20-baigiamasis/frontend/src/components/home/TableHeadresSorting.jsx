import { useState } from "react";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

const TableHeadresSorting = ({ styles, children, setFilter, filter, name }) => {
    const [order, setOrder] = useState();

    const ascButtonHandler = () => {
        console.log('Sorting in ascending');
        setOrder(1);
        setFilter(
            {
                fieldName: name,
                order: 1
            }
        );
    }

    const descButtonHandler = () => {
        console.log('Sorting in descending');
        setOrder(-1);
        setFilter(
            {
                fieldName: name,
                order: -1
            }
        );
}

const combinedStyles = `bg-gray-100 border-b-4 sticky top-0 py-2 ${styles}`

return (
    <>
        <th className={combinedStyles}>
            <div className="flex items-center">
                {children}
                <div className="flex flex-col pl-2">
                    <button onClick={ascButtonHandler}>
                        <GoTriangleUp className={filter.fieldName == name && filter.order == 1 ? "text-red-500" : "text-black"} />
                    </button>
                    <button onClick={descButtonHandler}>
                        <GoTriangleDown className={filter.fieldName == name && filter.order == -1 ? "text-red-500" : "text-black"} />
                    </button>
                </div>
            </div>
        </th>
    </>
)
}

export default TableHeadresSorting