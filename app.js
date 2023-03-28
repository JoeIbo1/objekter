"use strict"; // Enforces strict mode, which helps catch common programming errors

// Define three objects, each representing a different character
const harry = {
  firstName: "Harry",
  lastName: "Potter",
};

const ron = {
  firstName: "Ron",
  lastName: "Weasley",
};

const hermione = {
  firstName: "Hermione",
  lastName: "Granger",
};

// Log the objects to the console
console.log(harry);
console.log(ron);
console.log(hermione);

// Log Harry's last name to the console
console.log(harry.lastName);

// Update Harry's first name
harry.firstName = "Potty";

// Log the updated Harry object to the console
console.log(harry);

// Create a new variable called chosenOne and assign the Harry object to it
const chosenOne = harry;
// Update the first name of the chosenOne object
chosenOne.firstName = "(The chosen one)";

// Log the updated Harry object to the console, which now has its firstName property changed
console.log(harry);

harry.middleName = "James";
ron.middleName = "Bilius";
hermione.middleName = "Jean";

// Define a function to display student information on the webpage
function showStudent(student) {
  // Update the text content of the specified elements with the student's first, middle, and last name
  document.querySelector("#firstName").textContent = student.firstName;
  document.querySelector("#middleName").textContent = student.middleName;
  document.querySelector("#lastName").textContent = student.lastName;
}

// Call the showStudent function to display Harry's and Ron's information on the webpage
showStudent(harry);

function addStudent(student) {
  const studentli = document.createElement("li");
  const text = document.createTextNode(`${student.firstName} - ${student.middleName} - ${student.lastName}`);
  studentli.appendChild(text);
  document.querySelector("#students").appendChild(studentli);
}

addStudent(harry)
addStudent(ron)

