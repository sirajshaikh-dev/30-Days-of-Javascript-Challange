/*Activity 4: Error Handling in Promises
Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.*/
function randomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved!");
    } else {
      reject(new Error("Promise rejected."));
    }
  });
}

randomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log("Caught an error:", error.message));

/*
OUTPUT:
Promise resolved!
*/

/*Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.*/
function randomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved!");
    } else {
      reject(new Error("Promise rejected."));
    }
  });
}

async function handlePromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.log("Caught an error:", error.message);
  }
}

handlePromise();

/*
OUTPUT:
Caught an error: Promise rejected.
*/
