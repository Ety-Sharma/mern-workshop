// TASK 6: Loops. Run: node task-06-loops.js
const marks = [45, 67, 89, 90, 32];

// TODO 1: for loop, print 1 to 10
for(let i=0;i<=10;i++){
    console.log(i);
}

// TODO 2: for...of, total of marks, print "total 323"
let sum =0;
for(mark of marks){
    sum=sum+mark;
}
    console.log("total"+sum);

// TODO 3: for...of + if, print "above 50: <mark>" for marks above 50
for(mark of marks){
    if(mark>50){
        console.log(`above 50:${mark}`);
    }
}
// TODO 4: while loop, print "countdown 5" down to "countdown 1"
let count=5;
while(count>=1){
console.log("countdown"+count);
count--;
}