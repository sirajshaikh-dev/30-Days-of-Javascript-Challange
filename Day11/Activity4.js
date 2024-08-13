//Activity4: Fetching data from an API
//Task6: Use fetch API to get data from public API and log the response data to the console using promises.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
}).then((data)=>
    console.log(data)
).catch((error) => console.log(error))

//Task7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function getPublicData(){
    try {
     const response= await fetch("https://jsonplaceholder.typicode.com/users")
     const data =await response.json()
     console.log(data);
    } catch (error) {
     console.log(error);
    }
 }
 getPublicData()
