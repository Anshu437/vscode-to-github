// Array of student names
const students = ["Rahul", "Amit", "Priya", "Sneha", "Arun"];

// Using for loop
console.log("Using for loop:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Using forEach loop
console.log("\nUsing forEach loop:");

students.forEach(function(student) {
    console.log(student);
});