let colorBox = document.querySelectorAll('.colors-box .color-choice');
let sizeBox = document.querySelectorAll('.size-box .size-choice');
let selectedColorName
let imageNumber = 1;

const removeAllColorActive = () => {
    colorBox.forEach(box => {
        box.classList.remove('color-active');
    });
};

const removeImageSelector = () => {
    document.querySelectorAll('.image-gallery div').forEach(div => {
        div.classList.remove('image-active');
    });
};

colorBox.forEach(box => {
    box.addEventListener('click', () => {
        removeAllColorActive();
        box.classList.add('color-active');
        selectedColorName = box.attributes.color.nodeValue;
        document.querySelector('.color-name span').innerHTML = selectedColorName;

        let selectedColorNameImage = document.querySelector(`[color="${selectedColorName}"]`);
        let selectedColorNameImageSrc = selectedColorNameImage.attributes.src.nodeValue;
        let selectedColorNameImageParent = selectedColorNameImage.parentElement;

        document.getElementById('selected-image').style.backgroundImage = `url("${selectedColorNameImageSrc}")`;
        imageNumber = parseInt(selectedColorNameImage.attributes.imgNumber.nodeValue);

        removeImageSelector();
        selectedColorNameImageParent.classList.add('image-active');
    });
});

const removeAllSizeActive = () => {
    document.getElementById('low-quantity').classList.add('quantity-display');
    sizeBox.forEach(box => {
        box.classList.remove('size-active');
    });
};

sizeBox.forEach(box => {
    box.addEventListener('click', () => {
        removeAllSizeActive();
        box.classList.add('size-active');
        let sizeName = box.attributes.size.nodeValue;
        document.querySelector('.size-name span').innerHTML = sizeName;
        let quantityLeft = box.attributes.quantityLeft.nodeValue;

        if (quantityLeft < 5 && quantityLeft != 0) {
            document.getElementById('low-quantity').classList.remove('quantity-display');
        } else if (quantityLeft == 0) {
            box.classList.remove('size-active');
        }
    });
});

const imageUrl = () => {
    document.getElementById('selected-image').style.backgroundImage = `url("images/product${imageNumber}.png")`;
}

document.querySelector('.arrow-button-right').addEventListener('click', event => {

    if (imageNumber < 5) {
        document.getElementById(`image${imageNumber}`).parentElement.classList.remove('image-active');
        ++imageNumber
        document.getElementById(`image${imageNumber}`).parentElement.classList.add('image-active');
    } else {
        document.getElementById(`image${imageNumber}`).parentElement.classList.remove('image-active');
        imageNumber = 1;
        document.getElementById(`image${imageNumber}`).parentElement.classList.add('image-active');
    }

    imageUrl()
});


document.querySelector('.arrow-button-left').addEventListener('click', event => {

    if (imageNumber >= 2) {
        document.getElementById(`image${imageNumber}`).parentElement.classList.remove('image-active');
        --imageNumber
        document.getElementById(`image${imageNumber}`).parentElement.classList.add('image-active');
    } else {
        document.getElementById(`image${imageNumber}`).parentElement.classList.remove('image-active');
        imageNumber = 5;
        document.getElementById(`image${imageNumber}`).parentElement.classList.add('image-active');
    }

    imageUrl()
});

