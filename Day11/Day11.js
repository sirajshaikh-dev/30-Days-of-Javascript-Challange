//Activity1:Understanding Promises
//Task1: Create a promise that resolves with a message after a 2 second timeout and log th emessage to the console.

// new Promise(function(resolve){
//     setTimeout(function(){
//          console.log('Task1');
//          resolve()
//     },2000)
// }).then(function(){
//     console.log('Task 1 promise resolved');
// })

//Task2: Create a promise that rejects with an error message after a 2-second timout and handle the error using .catch()
//  new Promise(function(resolve,reject){
//     setTimeout(function(){
//     let error=true
//           if(!error){
//              resolve()
//           }else{
//             reject('Error: something went wrong')
//           }
//     },2000)
// }).then(function(){
//     console.log('Task 2 promise resolved');
// }).catch(function(error){
//     console.log(error);
// })

// //Activity2: chaining Promises
// //Task3: Create a sequence of promises that simulate fetching data from a server. chain the promises to log messages in specific order.

const fetchData= function(data,delay){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(data)
        },delay)
    })
};

fetchData('Fetching data from server1', 1000)
.then(function(message){
    console.log(message);
    return fetchData('Fetching data from server2',1000)
}).then((message)=>{
    console.log(message);
    return fetchData('Fetching data from server3',1000)
}).then((message)=>{
    console.log(message);
 })

 // Another way

    //function fetchData1(){
    //     return new Promise((resolve) => {
    //         setTimeout(()=>{
    //             console.log("Data from server1 fetched");
    //             resolve("data1")
    //         },1000)     //Simulating a 1-second delay
    //     });
    // }
    
    // function fetchData2(){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             console.log('Data from server2 fetched');
    //             resolve('Data2')
    //         },1500) // Simulating a 1.5-second delay
    //     })
    // }
    
    // function fetchData3(){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             console.log('Data from server3 fetched');
    //             resolve('Data3')
    //         },500) // Simulating a 1.5-second delay
    //     })
    // }
    
    // fetchData1()
    // .then((result1)=>{
    //     console.log(`Processing ${result1}`);
    //     return fetchData2()
    // }).then((result2)=>{
    //     console.log(`Processing ${result2}`);
    //     return fetchData3()
    // }).then((result3)=>{
    //     console.log(`Processing ${result3}`);
    //     console.log('All data fetched and processed'); 
    // }).catch((error)=>{
    //     console.log('An error occured :', error);
    // })
    
    /*Task-3 Output:
    Data from server 1 fetched.
    Processing Data1
    Data from server 2 fetched.
    Processing Data2
    Data from server 3 fetched.
    Processing Data3
    All data fetched and processed.
    */
    
    //Activity 3: using async/await
    // Task4: Write an async function that waits for a promise to resolve and then logs the resolved value.
    
    const getUserDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "iamvkr", lang: "js" });
    }, 1000);
})
async function server() {
    const result = await getUserDetails;
    console.log("User Result: ", result);
}
server();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const getUserDetails2 = new Promise((resolve, reject) => {
    let err = true;
    if (err) {
        reject({ message: "internal server error" });
        return false;
    }
    setTimeout(() => {
        resolve({ username: "iamvkr", lang: "js" });
    }, 2000);
})
async function server2() {
    try {
        const result = await getUserDetails2;
        console.log("User Result: ", result);
    } catch (error) {
        console.log("ERR",error);
    }
}
server2();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const pm = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
})
pm.then(data => console.log(data))

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json(url);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getData('https://dummyjson.com/products/1');

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P1 is done")
    }, 1000);
})
const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P2 is done")
    }, 1500);
})
const p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P3 is done")
    }, 2000);
})

const result =  Promise.all([p1,p2,p3]);
result.then(res=>{
    console.log(`Result of p1: ${res[0]}`);
    console.log(`Result of p2: ${res[1]}`);
    console.log(`Result of p3: ${res[2]}`);
});
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([p1, p2, p3])
  .then(value => {
    console.log(value); // Logs "Promise 1 resolved" because it resolves the fastest
  })
  .catch(error => {
    console.error(error);
  });
