// Day6 : arrays
// Activity1: Array creation and access
//Task1: create an array of numbers from 1 to 5 and log the array to console
const num=[1,2,3,4,5]
// console.log(num)

//Task2: Access the first and last elements of the array and log them to the console
// console.log(num[0], num[4])

//Activity2: Array methods (basic)
// Task3: Use the "push" method to add new num to end 
 num.push(6);
 // Task3: Use the "pop" method to remove last num from array
 num.pop(5)
 // Task3: Use the "shift" method to remove the first element
 num.shift(0) 
 // Task3: Use the "unshift" method to add new num to beginning of an array
 num.unshift(1) 
//  console.log(num)

 //Activity3: Array Methods (Intermediate)
 //Task7: Use the "map" method to create a new array where each number is doubled and log the new array.
const double= num.map((num)=>  num*2);
console.log(double)

//Task8: Use "filter" method to create a new array with only even numbers and log the new array.
