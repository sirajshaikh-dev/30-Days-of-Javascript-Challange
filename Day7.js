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
            //  return `Title: ${book.title}, Author: ${book.author}` // 
             return `Title: ${this.title}, Author: ${this.author}`  // can use "this" 
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
        console.log(book);
        
        //Activity3: Nested Objects
        //Task5: Create a nested object representing a alibrary with properties like name and books (an array of book objects), and log the library object to the console.