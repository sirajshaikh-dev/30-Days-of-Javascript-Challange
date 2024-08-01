// Day7: Objects:
//Activity1: Object creation and access
// Task 1: Create an object representing a book with properties like title,author,and year and log the object
let book={
    title: "The alchemist",
    "author": "Paulo Coelho",
    year: 2000
    }
// console.log(book)
     
// Task2: Access and log the title and author properties of the book object.
// console.log(`Title: ${book.title}`)
// console.log("Author", book["author"]) // access throgh brackets when key is string

//Object Methods
//Task3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
book={
    title: "How to win friends",
    author: "Dale Carneige" ,
    info : function(){
             return `Title: ${book.title}, Author: ${book.author}` // 
            //  return `Title: ${this.title}, Author: ${this.author}`  // can use "this" 
        },

    about : ()=>{
        // return `Title: ${this.title}, Author: ${this.author}`  // can't use "this" 
        return `Title: ${book.title}, Author: ${book.author}`  //  wihtout "this" 

    },   
    }
    // console.log(book.info())

    //Task4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log updated object.
    book={
        title: "Make your bed",
        author: "william",
        year: 1990,
        updateYear(newYear){   // this is similar to- updateYear : function(newYear){ }
            this.year= newYear;
            // console.log(`year updated to ${this.year}`)
            }
        };
        
        /*adding method outside the object
        book.updateYear= function (newYear){ this.year=newYear};*/
        
        book.updateYear(2024);
        // console.log(book);
        
//Activity3: Nested Objects
//Task5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

    let library= {
    name: "Central Library",
    books: [
        {title: 'java', author: 'MC', year: 1995},
        {title: 'REACH', author: 'RK', year: 2005},  
    ]
    }
    // console.log(  library.books )
/*output: [
{ title: 'java', author: 'MC', year: 1995 },
{ title: 'REACH', author: 'RK', year: 2005 }
]*/  
        // console.log(` ${library.books}`)  
//Output: [object Object],[object Object]
/*The difference  is due to how JavaScript handles string interpolation and the toString() method when printing objects or arrays. */
/*To log objects or arrays within a string while keeping the detailed structure, avoid using ${}. Instead, use JSON.stringify() to convert the object or array into a JSON-formatted string: */        
/*console.log(`${JSON.stringify(library.books)}`); 
// Outputs: [{"title":"java","author":"MC","year":1995},{"title":"REACH","author":"RK","year":2005}]*/

//Task6: Access and log the name of the library and the titles of all books in the libreary.
    
library= {
    name: "Central Library",
    books: [
        {title: 'java', author: 'MC', year: 1995},
        {title: 'REACT', author: 'RK', year: 2005},  
        ]
    }
    // console.log(library.name)
    // console.log(library.books[0].title) // accessing first title

    //Accessing title of all books using for of loop
    for (const book of library.books) {
        // console.log(book.title)   
    }
    //using ForLoop
    for(let i=0; i<library.length;i++){
        // console.log(library.books[i].title)
    }
    //using forEach method()
    library.books.forEach(book=>{
        // console.log(book.title)
    })

//Activity4: The "this" keyword
//Task7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book= {
    title: "Machine",
    year: 2019,
    ["author"]: "Hitesh",
    titleAndYear: function ( ) {
        // return (this.title ,this.year)
        return(`Title: ${this.title}, Year: ${this.year}`)
    }
}
returnYear=book.titleAndYear();
// console.log(returnYear)

//also by assigning function 
book.getTitleAndYear = function () {
    return `${this.title} (${this.year})`;
  };
//   console.log(book.getTitleAndYear());

//Activity5: Object iteration:
//Task8: Use a "for...in" loop to iterate over the properties of the book and log eacah property

for (const key in book) {
    // console.log(`${key} : ${book[key]}`)
}

//Task9: Use Object.keys and Object.values methods to log all keys and values of book object.
console.log(Object.keys(book))
console.log(Object.values(book))
