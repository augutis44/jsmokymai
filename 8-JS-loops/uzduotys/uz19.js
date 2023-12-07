// Write program to generate and display the first n lines of a Floyd triangle.
//  (use n=5 and n=11 rows). According to Wikipedia Floyd's triangle is a 
// right-angled triangular array of natural numbers, used in computer science education.
//  It is named after Robert Floyd. It is defined by filling the rows of the triangle
//  with consecutive numbers, starting with a 1 in the top left corner:
// Sample output for n = 5 :
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let n = 10;
let num = 1;

for (let i = 1; i <= n; i++) {
    line = '';
    for (let j = 1; j <= i + (i - 1); j++) {
        if (j % 2 == 0) {
            line += ' ';
        } else {
            line += num;
            num++
        }
    }
    console.log(line);
}