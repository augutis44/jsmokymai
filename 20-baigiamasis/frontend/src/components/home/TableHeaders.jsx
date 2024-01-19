
const HomeTableHeaders = ({ styles, children }) => {

    const combinedStyles = `py-2 ${styles}`

    return (
        <>
            <th className={combinedStyles}>
                {children}
            </th>
        </>
    )
}

export default HomeTableHeaders