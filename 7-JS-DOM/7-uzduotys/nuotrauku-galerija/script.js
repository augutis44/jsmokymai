let imageSrc = document.querySelector('#image1 img').attributes.src.value;

let leftButton = document.getElementById('left-click');
let rightButton = document.getElementById('right-click');

let imageNumber = 1;

const imageUrl = () => {
    let imgUrl = `url("images/image${imageNumber}.png")`;
    document.querySelector('.outside-image-div .image-div').style.backgroundImage = imgUrl;
}

rightButton.addEventListener('click', event => {

    if (imageNumber < 5) {
        document.getElementById(`image${imageNumber}`).classList.remove('image-selected');
        ++imageNumber
        document.getElementById(`image${imageNumber}`).classList.add('image-selected');
    } else {
        document.getElementById(`image${imageNumber}`).classList.remove('image-selected');
        imageNumber = 1;
        document.getElementById(`image${imageNumber}`).classList.add('image-selected');
    }

    imageUrl()
});


leftButton.addEventListener('click', event => {

    if (imageNumber >= 2) {
        document.getElementById(`image${imageNumber}`).classList.remove('image-selected');
        --imageNumber
        document.getElementById(`image${imageNumber}`).classList.add('image-selected');
    } else {
        document.getElementById(`image${imageNumber}`).classList.remove('image-selected');
        imageNumber = 5;
        document.getElementById(`image${imageNumber}`).classList.add('image-selected');
    }

    imageUrl()
});
