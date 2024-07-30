// Day6 : arrays
// Activity1: Array creation and access
//Task1: create an array of numbers from 1 to 5 and log the array to console
const num=[1,2,3,4,5,6,7,8,9,10]
// console.log(num)

//Task2: Access the first and last elements of the array and log them to the console
// console.log(num[0], num[4])

//Activity2: Array methods (basic)
// Task3: Use the "push" method to add new num to end 
 num.push(6);
 // Task4: Use the "pop" method to remove last num from array
 num.pop(5)
 // Task5: Use the "shift" method to remove the first element
 num.shift(0) 
 // Task6: Use the "unshift" method to add new num to beginning of an array
 num.unshift(1) 
//  console.log(num)

 //Activity3: Array Methods (Intermediate)
 //Task7: Use the "map" method to create a new array where each number is doubled and log the new array.
const double= num.map((num)=>  num*2);
// console.log(double)

//Task8: Use "filter" method to create a new array with only even numbers and log the new array.
const even= num.filter((num)=>num%2===0)
// console.log(even)

//Task9: use "reduce" method to calculate the sum of all numbers in the array and log the result
const sum= num.reduce((acc,currVal)=>acc+currVal)
// console.log(sum)

// Activity4:Array Iteration
//Task10:Use "for" loop to iterate over the array and log each element to console
for (let index = 0; index < num.length; index++) {
    // console.log(num[index])   
}

//Task11: Use the "forEach" method to iterate over the array and log each element to the console
// num.forEach(num=>console.log (num));

//Activity5: Multi-dimensional arrays
// Task12: Create a 2-D array(matrix) and log the entire to console
const shoppingCart = [
    [  "web dev Course", 4999 ],
    [  "UI/UX Course",  2999 ],
    [  "PYTHON Course",  8999 ],
    [  "js Course", 9999 ],
];
// console.log(shoppingCart);
// Task13: Access and log a specific element from the 2-D array

console.log(shoppingCart[0] )
console.log(shoppingCart[0][1])
console.log(shoppingCart[3][0])