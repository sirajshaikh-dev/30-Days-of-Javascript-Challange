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

//Activity2: Mouse events
//Task3: Add a mouseover event listener to an element that changes its background color
const element= document.getElementById('mouseEvent')
// element.addEventListener('mouseover',function  ( ) {
//     element.style.backgroundColor= 'blue'
// })
// //Task4: Add a mouseout event listener to an element that reset its bgcolor
// element.addEventListener('mouseout',function(){
//     element.style.backgroundColor= ""
// })

//using toggle
// function toggleBgColor(event) {
//     if (event.type === 'mouseover') {
//       element.style.backgroundColor = 'blue';
//     } else if (event.type === 'mouseout') {
//       element.style.backgroundColor = '';
//     }
//   }
// element.addEventListener('mouseover', toggleBgColor);
// element.addEventListener('mouseout', toggleBgColor);

//Activity3: Keyboard Events
//Task5: Add a keydown event listener to an input field that logs the key pressed to the console.

// const inputField= document.getElementById('task5')
//  inputField.addEventListener('keydown',function () {
//     console.log('keydown pressed')
// })

//Task6: Add a keyup event listener to an input field that displays the current value in paragraph
const inputField= document.getElementById('task6')
const para= document.getElementById('display')
inputField.addEventListener('keyup',function(){
    para.textContent= inputField.value;
})