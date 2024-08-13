// Day11:  
//Activity 3: using async/await
// Task4: Write an async function that waits for a promise to resolve and then logs the resolved value.

    function delay(ms){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Resolved after delay");
            },ms)
        })
    }
 
    async function runAsyncTask() {
        console.log("Task started...");
        const result= await delay(2000); // Waits for 2 seconds
        console.log( result); 
        console.log('check');
    }
    runAsyncTask()




//Task5: write an async function that handles a rejected promise using try-catch and log error message.

promiseFive= new Promise (function(resolve,reject){
    setTimeout(function(){
    let error=true
    if(!error){
        resolve('Promise resolved');
    }else{
         reject('Error occured');
    }
    },2000)
})

async function consumePromiseFive( ) {
    console.log("Processing... Please wait for 2 seconds.");
    try {
    const response= await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

