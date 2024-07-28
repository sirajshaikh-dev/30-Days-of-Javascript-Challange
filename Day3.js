// Control Structure
// Activity 1: If else 
// Task1: write a program to check if a number is positive, negative, or zero

/*let num= prompt("enter a number: ");
if (num>0){
    console.log("Positve")
}else if (num<0){
    console.log("Negative");
}else if(num==0) {
    console.log("zero")
}*/

// Task2: Write a program to check if a person is eligible to vote (age>=18)

 let age= 21;
 if (age>=18){
    console.log("eligible to vote")
 } else{
    console.log("Under age")
 }

 // Activity2 Nested if else statements
 // Task3: write a program to find the largest of three numbers using nested if else
console.log("Task 3")
 let num1=110;
 let num2=32;
 let num3=30;

 if ( num1>num2&& num1>num3){
    console.log(`${num1} is largest`)
 }else if(num2>num1&& num2>num3) {
    console.log(`${num2} is largest`)
 }else if (num3>num1 && num3>num2){
    console.log(`${num3} is largest`)
 }

 //Activity3: Switch Case
 // Task4: Write a program that uses a switch case to determine the day of the week based on a number(1-7)

 const weekDay=2;

 switch(weekDay){
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default: console.log("any day")
    break;
 } 

 //  Extra practice: Dealing with strings

 const weekDays="Friday";
 switch(weekDay){
    case "Mon": console.log("Monday")
    break;
    case "Tue": console.log("Tuesday")
    break;
    case "Wed": console.log("Wednesday")
    break;
    case "Thu": console.log("Thursday")
    break;
    case "Fri": console.log("Friday")
    break;
    case "Sat": console.log("Saturday")
    break;
    case "Sun": console.log("Sunday")
    break;
    default: console.log("any day")
    break;
 } 

 // Task5: write a program that uses a switch case to assign a grade(A,B,C,D,E,F) based on score and log the result
 console.log("Task5")
 const grade="F";
switch(grade){
   case "A": console.log("Your score is above 90 ")
   break;
   case "B": console.log("Your score is above 80 AND below 90 ")
   break;
   case "C": console.log("Your score is above 70 AND below 80 ")
   break;
   case "D": console.log("Your score is above 60 AND below 70 ")
   break;
   case "E": console.log("Your score is above 50 AND below 60 ")
   break;
   case "E": console.log("Your score is above 40 AND below 50 ")
   break;
   default: console.log("You are fail")
}

//Activity 4:conditional (Ternary) Operator 
// TASK6:write a program to check if a number is even or odd
// syntax: condition? ifTrue : ifFalse
console.log("Task6:")
const number= 50;
console.log(number%2===0 ? "even": "odd");

// Activity 5: Combining Conditions
// Task7:Write a program to check if a year is a leap year using multiple conditions (divide by4,but not 100 unless also divisible by 400)
console.log("Task7");
const year=2020;
const isLeapYear=(year%4===0)? ((year%100===0) ? (year%400===0):true):false;
console.log(isLeapYear?"Leap Year":"Not a leap year")
 
// Task 7 using if else
const years=2022;
if(years%4===0){
   if(years%100===0){
      if (years%400===0){
         console.log("leap year");
      }else {
         console.log("Not a leap Year ");
      }
    }else{
      console.log("Leap year")
    }
} else{
   console.log("not a leap year")
}