/*Activity 5: Graceful Error Handling in fetch
Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.*/
fetch("https://jsonplaceholder.typicode.com/postsssssssssssss")
  .then((response) => response.json())
  .catch((error) => console.log("Fetch error:", error.message));

/*
OUTPUT:
Fetch error: Failed to fetch
*/

/*Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.*/
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/postsssssssssssss"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

fetchData();

/*
OUTPUT:
Fetch error: Failed to fetch
*/
