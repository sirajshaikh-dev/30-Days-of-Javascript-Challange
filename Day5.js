//Day5: Functions:
//Activity1: Function declaration: 
// Task1: write a function to check if a number is even or odd and log the result 

// function evenOrOdd(num) {
//     if (num%2===0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// evenOrOdd(6);

//Task2: calculate the square of a number and return the result

// function square(num1) {
//      return num1*num1;
//   }
// console.log( square(4))

//Activity2: Function Expressions
// Task3: write a function expression to find the maximum  of two nos. and log the result

// function maxAndMin(num1,num2) {     // normal declartion
// const maxAndMin= function (num1,num2){   // Function Expression 
//      if (num1>num2) {
//         console.log(num1 + ":is maximum") //  
//      } else{
//         console.log(num2 + ":is maximum")
//      }
// }
// console.log (maxAndMin(10,50)) // 

// console.log(maxAndMin(10,20)) // using holding to variable  
// Output is (50 : is maximum)
// undefined
// if a function doesn't explicitly return a value, it implicitly returns undefined.
// use return instead of console.log in line 28 & 30 to avoid "undefined"

// Task4: wirte a function expression to concatenate two string and retun the result
//  const concatenate= function(str1,str2){
//     return str1+str2;
//  }
//  let result=concatenate("siraj"," shaikh")
// console.log(result);

// Activity3: Arrow function
// Task5: write a arrow function to calculate the sum of two nos. and return the result

//explicit return: use when function contain more than one line 
// const sum = (num1,num2)=>{
//     return num1+num2;
// }
// implicit return : use when function body is single expression
// const sum1=(num1,num2)=> (num1+num2);
// console.log(sum(3,12))

// Task6: write an arrow function to check if a string contains a specific character and return a boolean value.
// containChar=(str,char)=> (str.includes(char));
// console.log(containChar("Siraj","a"))
// console.log(containChar("Siraj","b"))

//Activity4: Function Parameters and Default values
//Task7: write a func that takes two params and returns their product. Provide default value for the second parameter

// const product= function (number1, number2=10) {
//     return number1*number2;
// }
// console.log(product(5,2)) // 10
// console.log(product(5))   // 50
// // using arrow function
// const multiply = (a,b=4)=> a*b;
// console.log(multiply(8,2))
// console.log(multiply(8))

// Task8: write a function that takes a persons name and age and returns a greeting message. Provide a default age
// const greeting=(name, age=22)=>  (`Hello ${name}, YOu are ${age} years old`);
// console.log(greeting( "SIRAJ", 12))

// Activity5: High order function
// Task9: write a high order function that takes a function and a number, and calls the functions that many times.

const repeatFunc=(func, n)=>{
    for(let i=0;i<n;i++){
        func();
    }
}
const sayHello= ()=>{
    console.log("Hello");
}
repeatFunc(sayHello,3)

// Task10: write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));

const double = x => x * 2;
const square = x => x * x;

const result = applyFunctions(double, square, 3);
console.log(result); // Outputs: 36 (double(3) = 6, square(6) = 36)
