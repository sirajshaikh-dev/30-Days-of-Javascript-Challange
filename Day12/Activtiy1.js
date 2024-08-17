//Day12: Error Handling
//Activity1: Basic Error Handling with Try-catch
//Task1: Write a function that intentionally throws an error and use try-catch block to handle the error and log an appropriate message to the console.

const Task1=  new Promise (function(resolve,reject){
    setTimeout(()=>{
     let error=true;
     if (!error) {
         resolve({username:'javascript', password: '124'})
     }else 
     reject('Promise rejected')
    },1000)
 })
     //console.log(Task1);     //log the Promise object itself.
 async function consumeTask1() {
    try {
     const response= await Task1;
     console.log(response);
    } catch (error) {
     //console.log("An error occurred:", error);      // An error occurred: Promise rejected
    
     /*console.log("An error occurred:", error.message);   //O: An error occurred: undefined
      -it's a plain string and not an Error object, it doesn't have a message property. That's why error.message is undefined.
      - to fix this, convert rejection into 'Error" object to make use of 'message' property.
     add this -> reject(new Error('Promise rejected'));
     */
    }
 }
 consumeTask1()
 
 /*Method2 of Task1 */
 function calculateSquareRoot(number) {
     // Intentionally throwing an error for negative numbers
     if (number < 0) {
         throw new Error("Cannot calculate the square root of a negative number.");
     }
     return Math.sqrt(number);
 }
 try {
     let result = calculateSquareRoot(-2);
     console.log("Square root:", result);
 } catch (error) {
     console.error("An error occurred:", error.message);
 }

 //Task2: Create a function that divides two numbers and throws an error if the denominator is zero. Use try-catch block to handle this error,
 function divide(a,b){
    if (b===0) {
        console.log('not divisible');
        // return;     // prevents division from 0. /*Output: with return:undefined, without retrun:infinity */
     } 
    return a/b;
 }
 try {
    console.log(divide(20,0));
 } catch (error) {
    console.log('Error: ', error);
 }
 
