// Student variables without object
/*
var name = "Tinni";
var roll = 2010;
var year = "2st";
var courses = ["DLD", "IWT", "OOP"];
document.writeln(name + " " + year + " " + roll + " " + courses);
*/

// Student variables with object creation
var student1 = {
  name: "Tinni",
  roll: 2010,
  year: "2st",
  courses: ["DLDL", "IWT", "OOP"]
};
document.writeln("<br>" + student1.name + " " + student1.year + " " + student1.roll + " " + student1.courses);

// Using constructor function
function Student(name, roll, year, courses) {
  this.name = name;
  this.roll = roll;
  this.year = year;
  this.courses = courses;
  this.display = function() {
    document.writeln("<br>" + this.name + " " + this.year + " " + this.roll + " " + this.courses);
  }
}

var student2 = new Student("Tain", 1090, "2nd", ["DSA", "SPL", "EDC"]);
student2.display();
document.writeln("<br>" + student2.courses[1]);

// Math function (no math function used here but <br> tag added)
document.writeln("<br>");

// getElementById examples
var text = document.getElementById("header1").innerText;
document.writeln(text);

var textElem = document.getElementById("header1");
document.writeln(textElem);
textElem.innerHTML = "Hello";
document.writeln("<br>");

var text2 = document.getElementById("header2").innerText;
document.writeln(text2);
document.writeln("<br>");

var textElem2 = document.getElementById("header2");
document.writeln(textElem2);
textElem2.innerText = "Hi, I am TINNI";
textElem2.style.color = "purple";

var text3 = document.getElementsByTagName("h3");
document.writeln(text3[0].innerText);
document.writeln("<br>");

// Creating multiple student objects
var student2 = {
  name: "Tinni",
  roll: 2010,
  year: "2st",
  courses: ["OPP", "DSA", "IWT"]
};

var student3 = {
  name: "Tain",
  roll: 2020,
  year: "2nd",
  courses: ["IWT", "Java", "CPP"]
};

var student4 = {
  name: "Tthi",
  roll: 2000,
  year: "2rd",
  courses: ["SPL", "DSA", "IWT"]
};

var students = [student2, student3, student4];

// Loop through students and print details
for (var i = 0; i < students.length; i++) {
  var s = students[i];
  document.writeln('<br><span style="color:purple;">Name: ' + s.name + "</span>");
  document.writeln("<br>Roll: " + s.roll);
  document.writeln("<br>Year: " + s.year);
  document.writeln("<br>Courses: " + s.courses.join(", "));
  document.writeln("<hr>");
}

// Loop through h4 elements and print their innerText in red
var h4Elements = document.getElementsByTagName("h4");
for (var i = 0; i < h4Elements.length && i < 3; i++) {
  document.writeln('<span style="color:purple;">' + h4Elements[i].innerText + "</span><br>");
  document.writeln("<br>");
}
