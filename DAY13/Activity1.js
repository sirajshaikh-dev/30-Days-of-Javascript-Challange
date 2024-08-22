
## Activity 1: Creating and Exporting Modules

**Task 1:** Create a module that exports a function to add two numbers. Import and use this module in another script.

```JS
// -------------- mathModule.js

// Exporting a function to add two numbers
function add(a, b) {
    return a + b;
}

export {add};
```

```JS
// -------------- app.js

// Importing the add function from mathModule.js
import { add } from "./mathModule";

const result = add(5, 3);
console.log(`The sum is: ${result}`); // The sum is: 8
```
**Task 2:** Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

```JS
// -------------- personModule.js

// Exporting an object representing a person with properties and methods
export const person = {
  name: 'siraj',
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
```

```JS
// -------------- app.js

// Importing the person object from personModule.js
import { person } from './personModule';

console.log(person.greet()); // Hello, my name is manoj
console.log(`Age: ${person.age}`); // Age: 25
```
