// TASK 5: Objects. Run: node task-05-objects.js
const student = { name: "Ravi", city: "Palwal", marks: 67 };

// TODO 1: add student.course = "BTech", print student
student.course="B.Tech";
console.log(student);
// TODO 2: destructure name and marks, print them
const{ name,marks}=student;
console.log(name,marks);
// TODO 3: const moved = copy of student with city "Gurugram"; print student.city and moved.city
const moved={
   ...student ,
    city:"Gurugram"
}
console.log(student.city);
console.log(moved.city);