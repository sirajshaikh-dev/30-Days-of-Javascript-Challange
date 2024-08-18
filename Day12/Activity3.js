//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwError() {
  throw new CustomError("This is a custom error.");
}

try {
  throwError();
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

/*
OUTPUT:
CustomError: This is a custom error.
*/

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty.");
  }
  return true;
}

try {
  validateInput(""); // This will throw an error
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

/*
OUTPUT:
ValidationError: Input cannot be empty.
*/