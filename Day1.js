// Task 4: create a variable of different data types(number, boolean, string,object,array) and log each variable 
// using typeof operator
const num=20;
let enjoy=true;
let text = "abcd";
let car ={key: "value", 
         Name: "suzuki",
         age: 40
        };
let marks= ['40', '50','60','70'];

console.log (typeof(num));
console.log(typeof(text));
console.log(typeof(enjoy));
console.log(typeof(car));
console.log(typeof(marks));  // Eventhough marks is an array, output: "array", bcos array are type of object in js
console.log(Array.isArray(marks)) // specifically checks if variable is an array output: "true"

// Task5: Declare a variable using "let", assign it an initial value, reassign a new value, and log both values to the console.
let name= "shaikh";
    console.log(name)
    name="siraj"
    console.log(name)

    // Task 6: Try reassigning the varianle declared with const and observe the error

const firstName="shaikh";
console.log(firstName);
firstName="siraj"
console.log(firstName)   // const variable cannot be reassigned
