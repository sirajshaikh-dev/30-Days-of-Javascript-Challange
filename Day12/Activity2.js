//Activity2: Finaaly Block
//Task3: Write a script that includes a try-catch block and finally block.
// log messages in the try,catch, and finally blocks to observe the execution flow.

 try {
    console.log(divide(20,0));
 } catch (error) {
    console.log('Error: ', error.message);
 }
 finally{
    console.log('promise is either resolved or rejected');
 }
