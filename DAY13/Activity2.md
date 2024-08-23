## Activity 2: Named and Default Exports

**Task 3:** Create a module that exports multiple functions using named exports. Import and use these functions in another script.

```JS
// -------------- utilsModule.js

// Exporting multiple functions using named exports
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

```

```JS
// -------------- app.js

// Importing the add and subtract functions from utilsModule.js
import { add, subtract } from './utilsModule';

console.log(`The sum is: ${add(5, 3)}`); // The sum is: 8
console.log(`The difference is: ${subtract(5, 3)}`); // The difference is: 2
```

**Task 4:** Create a module that exports a single function using default export. Import and use this function in another script.

```JS
// -------------- defaultExportModule.js

// Exporting a function using default export
export default function multiply(a, b) {
  return a * b;
}
```

```JS
// -------------- app.js

// Importing the multiply function from defaultExportModule.js
import multiply from './defaultExportModule';

console.log(`The product is: ${multiply(5, 3)}`); // The product is: 15
```