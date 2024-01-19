
const HomeTableHeaders = ({ styles, children }) => {

    const combinedStyles = `bg-gray-100 border-b-4 sticky top-0 py-2 ${styles}`

    return (
        <>
            <th className={combinedStyles}>
                {children}
            </th>
        </>
    )
}

export default HomeTableHeaders