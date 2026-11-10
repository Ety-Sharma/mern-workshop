// TASK 3: Functions. Run: node task-03-functions.js

// TODO: write add, isEven, greet and makeCounter here (arrow functions for the first three)
const add=(a,b)=>a+b;

const isEven=(a)=>{
   if(a%2==0){
    return true;
   } 
   else{
    return false;
   }
}
const greet=(name="friend")=>`Hi, ${name}`;
function makeCounter(){
    let count=0;
    return ()=>{
        count++;
        return count;
    };
}

console.log(add(4, 6));          // 10
console.log(isEven(7));          // false
console.log(isEven(10));         // true
console.log(greet());            // Hello friend
console.log(greet("Asha"));      // Hello Asha

const next = makeCounter();
next();
next();
console.log(next());             // 3
