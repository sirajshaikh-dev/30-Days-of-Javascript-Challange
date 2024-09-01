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
## Activity 2: Class Inheritance

**Task 3:** Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

const student1 = new Student("UMESH", 22, "S12345");
console.log(student1.getStudentId()); // Student ID: S12345
```

**Task 4:** Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  // Override the greet method of person class
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student1 = new Student("UMESH", 22, "S12345");
console.log(student1.greet()); // Hello, my name is UMESH, I am 22 years old, and my student ID is S12345.
```

## Activity 3: Static Methods and Properties

**Task 5:** Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Static method: we can call it without creating the instance of person class
  static genericGreet() {
    return "Hello, welcome to our community!";
  }
}

console.log(Person.genericGreet()); // Hello, welcome to our community!
```

**Task 6:** Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Static method: we can call it without creating the instance of person class
  static genericGreet() {
    return "Hello, welcome to our community!";
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  // Static variable
  static studentCount = 0;

  constructor(name, age, studentId) {
    // super method call a constructor of our parent class person to initialize the name and age fields
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  // Override the greet method of person class
  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student1 = new Student("RAKESH", 22, "S12345");
const student2 = new Student("SAMAR", 23, "S12346");
console.log(`Total number of students: ${Student.studentCount}`); // Total number of students: 2
```

## Activity 4: Getters and Setters

**Task 7:** Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("SAMAR", "SARKAR", 25);
console.log(person1.fullName); // SAMAR SARKAR
```

**Task 8:** Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName`). Update the name using the setter and log the updated full name.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    console.log("Hello " + name); // Hello Umesh Chaurasiya
    const [firstName, lastName] = name.split(" "); // ["Umesh", "Chaurasiya"]
    this.firstName = firstName; // Umesh
    this.lastName = lastName; // Chaurasiya
  }
}

const person1 = new Person("Samar", "Sarkar", 25);
console.log(person1.fullName); // Samar Sarkar
person1.fullName = "Umesh Chaurasiya";
console.log(person1.fullName); // Umesh Chaurasiya
```

## Activity 5: Private Fields (Optional)

**Task 9:** Define a class `Account` with private fields for `balance` and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

**Task 10:** Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

```js
// Task 1:
class Account {
  // Private Instance Variable Of Account
  _balance;

  constructor(initialBalance) {
    this._balance = initialBalance;
  }

  deposit(amount) {
    this._balance += amount;
    this.logBalance();
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
    this.logBalance();
  }

  logBalance() {
    console.log(`Current balance: ${this._balance}`);
  }
}

// Task 10:
const instanceOfAccount = new Account(1000);
console.log(instanceOfAccount._balance); // 1000
instanceOfAccount.deposit(1000); // Current balance: 2000
instanceOfAccount.withdraw(150); // Current balance: 1850
```

## Feature Request

1. **Basic Class Script:** Write a script that defines a `Person` class with properties and methods, creates instances, and logs messages.
2. **Class Inheritance Script:** Create a script that defines a `Student` class extending `Person`, overrides methods, and logs the results.
3. **Static Methods and Properties Script:** Write a script that demonstrates static methods and properties in classes.
4. **Getters and Setters Script:** Create a script that uses getters and setters in a class.
5. **Private Fields Script:** Write a script that defines a class with private fields and methods to manipulate these fields (optional).

## Achievements

By the end of these activities, students will:

- Define and use classes with properties and methods.
- Implement inheritance to extend classes.
- Utilize static methods and properties.
- Apply getters and setters for encapsulation.
- Understand and use private fields in classes (optional).
