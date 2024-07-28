/*Day4: Loops*/ 
// Activity1: For loops
// Task1: write a program to print numbers from 1 to 10  using for loop

// for (let i = 1; i <=10 ; i++) {
//     console.log(i);    
// }

// Task2: print the table of 5 using for loop
// console.log("Task 2")

// for (let index=5; index <=50  ; index=index+5) {
//     console.log(index);
// }

// Activity2: While loop
//Task3: CALCULATE the sum of no.s from 1 to 10
// console.log("Task3")
// let sum=0;
// let i=1;
// while (i<=10) {
//     sum+=i;
//     i++;
// }
// console.log(sum);

// Task4: print the numbers from 10 to 1 using while loop.
// console.log('Task4')

// let i=10;
// while (i>=1) {
//     i--;
//     console.log(i);
// }

//Activity5: Do...while loop
//Task5: print nos from 1 to 5 using do...while loop.
// console.log("Task5")
// let i=1;
// do {
//     console.log(i)
//     i++;
//  } while (i<=5);

// Task6: calculate the factorial of a number using do...while
// let number= 5;
// let factorial=1;
// let i=number
// do {
//     factorial= factorial*i;
//     i--;
// } while (i>=1);
// console.log(`${number}! is ${factorial}`)

// Task7: print triangle pattern using nested for loops

// let rows=5;
// for(let i=1;i<=rows;i++){
//     let pattern="";
//      for(let j=1; j<=i; j++){
//         pattern+="*"
//      }
//      console.log(pattern)
// }
/*   Task7 shortcut approach, while experimenting Task8
let rows=""
for(let i=1;i<=5;i++){
    rows+= "*";
    console.log(rows)
} */

// Activity 5: Loop control statements
// Task8: print nos from 1 to 10 but skip the number 5 using the continue statement.

// let numbers=""
// for(let i=1;i<=10;i++){
//     if (i===5) {
//         continue;
//     }
//     numbers+=i;
// }
// console.log(numbers)

// Task9: Write a program to print nos. from 1 to 10, but stop the loop when no. is 7 using break

// for(let i=1; i<=10;i++){
//     console.log(i)
//     if(i===7)break;
// }

/*Feature request */
//1. Number printing script
// print no.s from 1 to 10 using for loop and while loop

// for loop
// for (let index = 1; index <=10; index++) {
//      console.log(index)
// }

// while loop
// let i=1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//2.print multiplication table of 5 using for loop
 
// const number=5;
//  for(let i=1;i<=10; i++){
//      console.log(number*i) 
//or    console.log(`${number}*${i}=${number*i}`)
// }
 
