# Day 13: JavaScript Module Activities

Welcome to JavaScript Module Activities! In these activities, we will explore creating, exporting, and importing modules in JavaScript. We'll also cover using third-party modules, named and default exports, and importing entire modules. By the end of these activities, you'll have a strong understanding of how to work with modules in JavaScript.

## Table of Contents

1. [Activity 1: Creating and Exporting Modules](#activity-1-creating-and-exporting-modules)
2. [Activity 2: Named and Default Exports](#activity-2-named-and-default-exports)
3. [Activity 3: Importing Entire Modules](#activity-3-importing-entire-modules)
4. [Activity 4: Using Third-Party Modules](#activity-4-using-third-party-modules)
5. [Feature Request](#feature-request)
6. [Achievements](#achievements)

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
