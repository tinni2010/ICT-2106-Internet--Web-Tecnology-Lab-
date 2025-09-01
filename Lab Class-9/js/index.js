// ------------------------------
// var vs let
// ------------------------------

var a = 10;
var a = 12; // ✅ allowed (var can be redeclared)
document.writeln("a = " + a + "<br>");

// Using let (cannot be redeclared in same scope)
let b = 100;
let c = "Meawrer";
let v = 23.566;

// Type checking
document.writeln("Type of b = " + typeof b + "<br>");
document.writeln("Type of c = " + typeof c + "<br>");
document.writeln("Type of v = " + typeof v + "<br>");

// Number to String
let s = b.toString();
document.writeln("Number to String = " + s + " (" + typeof s + ")<br>");

// String to Number
let y = "103.07";
let x = parseInt(y);
document.writeln("parseInt(y) = " + x + " (" + typeof x + ")<br>");

let f = parseFloat(y);
document.writeln("parseFloat(y) = " + f + " (" + typeof f + ")<br>");

// NaN (Not a Number) check example
document.writeln("Number('ASDDDF') = " + Number("ASDDDF") + "<br>");
document.writeln("Number('124579.99') = " + Number("124579.99") + "<br>");
// Getting user input as string
let N1 = prompt("Enter first number:");
let N2 = prompt("Enter second number:");

// Convert input to float
let num1 = parseFloat(N1);
let num2 = parseFloat(N2);

// Arithmetic operations
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
document.writeln("<br><h3>Arithmetic Operations</h3>");
document.writeln("<table border='1' cellpadding='8'>");
document.writeln("<tr><th>Operation</th><th>Result</th></tr>");
document.writeln("<tr><td>" + num1 + " + " + num2 + "</td><td>" + sum + "</td></tr>");
document.writeln("<tr><td>" + num1 + " - " + num2 + "</td><td>" + sub + "</td></tr>");
document.writeln("<tr><td>" + num1 + " * " + num2 + "</td><td>" + mul + "</td></tr>");
document.writeln("<tr><td>" + num1 + " / " + num2 + "</td><td>" + div.toFixed(2) + "</td></tr>");
document.writeln("</table>");
