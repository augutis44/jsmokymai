//Create a script that displays 1-2-3-4-5-6-7-8-9-10 on one line. There will be no hyphen(-) at starting and ending position.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let outputArr = [];


for (let i = 0; i < arr.length; i++) {
    if (i != 0 && i != 1 && i != arr.length - 1) {
        outputArr.push("-" + arr[i]);
    } else {
        outputArr.push(" " + arr[i]);
    }
}

let output = outputArr.join("");

console.log(output);

// 1 2-3-4-5-6-7-8-9 10
