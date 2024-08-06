//Activity1: Basic Event Handling
//Task1: add a click event listener to a button that changes the text content of a paragraph
document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById('para1').textContent= "Text changed"
})

// easy to understand
// const button= document.getElementById('btn1')
// const para= document.getElementById('para1')
// button.addEventListener('click',function  () {
//      para.textContent="changed"
// })

//Task2:Add a double click event listener to an image that toggles its visibility 
const image= document.getElementById('task2')

image.addEventListener('toggle',function(){
     alert('clicked')
})