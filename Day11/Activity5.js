//Activity5: Concurrent Promises
//Task8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
async function fetchMultipleData() {
   try {
    let [data1,data2]= await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        fetch('https://api.github.com/users/hiteshchoudhary').then(res => res.json())
        ])
        console.log(data1,data2);
   } catch (error) {
    console.log('error occured',error);
   }
}
fetchMultipleData()


//Task9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
//Promise.race returns a single value, which is the result of the first promise that resolves or rejects, not an array of results like Promise.all.
async function fetchSingleData() {
    try {
     let  result= await Promise.race([
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(data => ({source :'jsonplaceholder',data})),  // add to identify which request resolved first
         fetch('https://api.github.com/users/hiteshchoudhary')
         .then(response => response.json())
         .then(data => ({source :'github',data})),   // add to identify which request resolved first
        ])
        console.log(`First resolved promise is from: ${result.source}`);
        console.log(result.data);
    } catch (error) {
     console.log('error occured',error);
    }
 }
 fetchSingleData()


 // // Simple solution to Task8 and Task9 
//Task8: 
 const promise1= new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve ('Promise 1 resolve'),3000)
 })
 
 const promise2= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve ('Promise 2 resolove')
    },2000)
 })

 const promise3= new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve ('Promise 3 resolve'),1000)
 })

 Promise.all([promise1,promise2,promise3])
 .then((response)=>console.log('all promises resolve',response))
 .catch(error=> console.log('one of promises failed',error))

 //Task9:
 Promise.race([promise1,promise2,promise3])
 .then((response)=>console.log('First promise resolved',response))
 .catch(error=>console.log('first promise failed',error))
