// TASK 2: Operators and if/else. Run: node task-02-if-else.js
const marks = 67;
const attendance = 80;

// TODO 1: if / else if / else chain that prints Grade A, Grade B, Grade C or Fail
if(marks>=60&& attendance>75){
    console.log('grade A');
}
else if(marks>=50&& attendance>=60){
    console.log('grade B');
}
else if(marks>=40 && attendance>=50){
    console.log('grade C');
}
else{
    console.log('fail');
}
// TODO 2: ternary that prints "Eligible" or "Not eligible"
console.log(marks>=60? "Eligible":"Not Eligible");