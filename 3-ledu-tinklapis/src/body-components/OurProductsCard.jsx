import './OurProductsCard.css'

const OurProductsCard = ({ cardName, imagePath, imageAlt, children }) => {

    return (
        <div className="ourProductsCard">
            <div>
                <img src={imagePath} alt={imageAlt} />
            </div>
            <div className='cardTextBox'>
                <h3>{cardName}</h3>
                <div className="underLine"></div>
                <p>{children}</p>
                <a href="#">READ MORE</a>
            </div>
        </div>
    )
}

export default OurProductsCard;