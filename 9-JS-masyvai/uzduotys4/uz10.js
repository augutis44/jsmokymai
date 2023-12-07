let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 2];

const hasDuplicates = (array) => {
    if ((new Set(array)).size !== array.length) {
        console.log('Array has duplicates');
    } else {
        console.log('Array does NOT have duplicates');
    }
}

hasDuplicates(arr1);
hasDuplicates(arr2);
