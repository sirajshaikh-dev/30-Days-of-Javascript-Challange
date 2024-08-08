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

image.addEventListener('dblclick',function(){
    // if (image.style.display === 'none') {
    //     image.style.display = 'block';
    //   } else {
    //     image.style.display = 'none';
    //   }
      //using ternary operator
      this.style.display = this.style.display === "none" ? "block" : "none";
  
})

//Activity2: Mouse events
//Task3: Add a mouseover event listener to an element that changes its background color
const element= document.getElementById('mouseEvent')
element.addEventListener('mouseover',function  ( ) {
    element.style.backgroundColor= 'blue'
})
// //Task4: Add a mouseout event listener to an element that reset its bgcolor
element.addEventListener('mouseout',function(){
    element.style.backgroundColor= ""
})

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

const inputField= document.getElementById('task5')
 inputField.addEventListener('keydown',function () {
    console.log('keydown pressed')
})

//Task6: Add a keyup event listener to an input field that displays the current value in paragraph
const inputField2= document.getElementById('task6')
const para= document.getElementById('display')
inputField2.addEventListener('keyup',function(){
    para.textContent= `you typed: ${inputField2.value}`;
})

//Activity5: Form Events
//Task7: Add a submit event listener to a form that prevents the defauld submission and logs the form data to the console.

document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log("Default prevented")
})

//Task8: Add a change event listener a select dropdown that displays the selected value in paragraph.
document.getElementById('lang').addEventListener('change',function(){
    document.getElementById('displayPara').innerText=`Selected: ${this.value}`
})

//Activity5: Event Delegation: 
//Task9:Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const li= document.getElementById('task9')
li.addEventListener('click',function(e){
    if (e.target.tagName==='LI') {
        console.log(e.target.textContent)
    }
})

//Task10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentList = document.getElementById('parentList');
const addItemButton = document.getElementById('addItem');
 
function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${parentList.children.length + 1}`;
    parentList.appendChild(newItem);
  }
  parentList.addEventListener('click', function(event) {
     if (event.target.tagName === 'LI') {
       console.log(event.target.textContent);
    }
    
});
addItemButton.addEventListener('click', addItem);