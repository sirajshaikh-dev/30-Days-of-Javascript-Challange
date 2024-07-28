// 21st July 2024
// Activity1 : Arithmatic operator
// Task 1: write a program to add two nums and log the reslut to the console.
// Task 2: write a program to Subtract two nums and log the reslut to the console.

let a=5;
let b=6;
console.log(a+b);
console.log(a%b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
//Activity2: Assignment operator(+=,+-) 
let x = 40;
let y = 50;
console.log(x +=20); //60
console.log(x +=10); //70
console.log(x -=10); //60
console.log(x -=y);  //10

// Activity 3: Comparison operator (>,<,<=,>=,==,===)

const op1= 11;
const op2= 13;
console.log(op1<op2)
console.log(op1>op2)
console.log(op1>=op2)
console.log(op1<=op2)
console.log(op1==op2)
console.log(op1===op2)

// eXTRA pRACTICE:
console.log(5 == 5); // true
console.log(5 == '5'); // true (number and string, but values are the same)

console.log(5 === 5); // true
console.log(5 === '5'); // false (different types: number and string)

console.log(5 != 8); // true
console.log(5 != '5'); // false (values are the same, type is ignored)

console.log(5 !== 8); // true
console.log(5 !== '5'); // true (different types: number and string)

//Practice Activity
//Let's write a small program that uses different comparison operators:

 
/*let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

console.log(num1 == num2);   // Checks if num1 is equal to num2
console.log(num1 === num2);  // Checks if num1 is strictly equal to num2
console.log(num1 != num2);   // Checks if num1 is not equal to num2
console.log(num1 !== num2);  // Checks if num1 is strictly not equal to num2
console.log(num1 > num2);    // Checks if num1 is greater than num2
console.log(num1 < num2);    // Checks if num1 is less than num2
console.log(num1 >= num2);   // Checks if num1 is greater than or equal to num2
console.log(num1 <= num2);   // Checks if num1 is less than or equal to num2*/

// Activity4: Logical Operator ('&&', '||', '!', )
console.log("Activity 4:")
let i=20;
let j=30;
console.log(i<j && j>10) // true: if both true
console.log(i<j || j>i) // fale: if both false
console.log(!(i<j)) // false <--> True

// pRACTICE ACTIVITY
let age = 25;
let hasLicense = true;
let isDrunk = false;

// Check if a person can drive
let canDrive = age >= 18 && hasLicense && !isDrunk;
console.log("Can drive: " + canDrive); // true

let canGetPermit = age < 18 || !hasLicense;
console.log("Can get permit: " + canGetPermit); // false

// Activity 5: Ternary Operator [condition ? expressionIfTrue : expressionIfFalse]
// Task14: write a program that uses the ternary operator to chek if a number is positive or negative and log the result to console.
console.log("Activity5");
// let number = parseFloat(prompt("Enter a number:"));
let number = 100;
let output = (number>=0)?"Positive" : "Negative";
console.log(output)

// if (number>=0){
//     console.log("positve")
// }else{
//     console.log("negative")
// }