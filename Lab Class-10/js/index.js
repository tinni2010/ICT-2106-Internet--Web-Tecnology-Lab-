// Output function with color support
function write(content, color = "green") {
  document.getElementById("output").innerHTML += `<span style="color:${color};">${content}</span><br>`;
}

// 1. If-Else and Ternary Operator
let a = Number(prompt("Enter the number (a):"));
let b = Number(prompt("Enter the number (b):"));
let c = Number(prompt("Enter the number (c):"));

if (a > 20) {
  write("A is greater than 20");
} else {
  write("A is less than or equal to 20");
}

// Nested ternary operator
(a > 20)
  ? ((a === 12) ? write("A is equal to 22") : write("A is not equal to 22"))
  : write("A is less than or equal to 20");

// 2. Functions
function square(x) {
  return x * x;
}

function squa(x, y) {
  return x * y;
}

function triple(x, y, z) {
  return x * y * z;
}

write("Square of a: " + square(a), "red");
write("Multiply (a * b): " + squa(a, b), "black");
write("Triple (a * b * c): " + triple(a, b, c), "red");

// 3. Immediately Invoked Function Expression (IIFE)
(function (x) {
  write("IIFE Square of a: " + square(x), "purple");
})(a);

// 4. Array Examples
let names = ['aaa', 'bbb', 'ccc', 'ddd'];
write("Names: " + names, "blue");

let firstName = [];
firstName[0] = "ttt";
write("FirstName: " + firstName, "purple");

let firstArray = new Array(5);
let secondArray = new Array(5);

firstArray[0] = "aaa";
firstArray[1] = "bbbb";
firstArray[2] = 22;

secondArray[0] = "tyt";
secondArray[2] = "iuyt";

write("Concat: " + firstArray.concat(secondArray));
write("Length of firstArray: " + firstArray.length);

// 5. Sorting Numbers
let numbers = [11, 111, 222, 1111];
numbers.sort(function (a, b) {
  return a - b; // ascending order
});
write("Sorted Numbers: " + numbers);

// 6. 2D Array
let array2d = [
  [1, 'A'],
  [2, 'B'],
  [3, 'C']
];
for (let i = 0; i < array2d.length; i++) {
  for (let j = 0; j < array2d[i].length; j++) {
    write(array2d[i][j] + " ");
  }
}
