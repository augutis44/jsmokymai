import './Gallery.css'

const Gallery = () => {


    return (
        <div className="galleryFull">
            <div className="gallery">
                <h2>Our Ice Creams</h2>
                <div className="galleryBox">
                    <img src="../public/images/gallery1.png" alt="chocolate ice cream" />
                    <img src="../public/images/gallery2.png" alt="vanilla and strawbery ice cream" />
                    <img src="../public/images/gallery3.png" alt="fruity ice cream" />
                    <img src="../public/images/gallery4.png" alt="girl with chocolate ice cream" />
                    <img src="../public/images/gallery5.png" alt="strawberry ice cream" />
                    <img src="../public/images/gallery6.png" alt="coocies nad cream ice cream" />
                </div>
            </div>
            <img src="../public/images/Blue_ice_cream.png" alt="blue popcicle" className='floatingBlueIceCream' />
        </div>
    )
}

export default Gallery