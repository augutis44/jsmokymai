import OurProductsCard from "./OurProductsCard"
import './OurProducts.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const OurProducts = () => {


    return (
        <div className="fullOurProducts">
            <div className="ourProducts">
                <h2>Our Products</h2>
                <div className="ourProductsCards">
                    <button id="backButton"><IoIosArrowDropleftCircle
                        size={80} color="#fff"/></button>
                    <OurProductsCard
                        cardName='Vanilla ice cream'
                        imagePath='../public/images/iceCreamCard1.jfif'
                        imageAlt='Vanilla ice Cream'>
                        Creamy, sweet, and classic, its a timeless favorite.
                    </OurProductsCard>
                    <OurProductsCard
                        cardName='Fruit sorbet'
                        imagePath='../public/images/iceCreamCard2.jfif'
                        imageAlt='Fruit sorbet'>
                        Refreshing and tangy, it bursts with natural fruit flavors.
                    </OurProductsCard>
                    <OurProductsCard
                        cardName='Vanilla ice cream'
                        imagePath='../public/images/iceCreamCard3.png'
                        imageAlt='Chocolate gelato'>
                        Rich, indulgent, and oh-so-smooth, a chocoholic's dream.
                    </OurProductsCard>
                    {/* <OurProductsCard
                        cardName='Caramel ice cream'
                        imagePath='../public/images/iceCreamCard4.jpg'
                        imageAlt='Caramel ice Cream'>
                        Sweet and salty at the same time, everything in one.
                    </OurProductsCard> */}
                    <button id="frontButton"><IoIosArrowDroprightCircle size={80} color="#fff"/></button>
                </div>
            </div>
        </div>
    )
}

export default OurProducts;