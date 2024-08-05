// Activity1: Selecting and manipulating elements
//Task1: slect an HTML elements by its ID and change its text content
const content= document.getElementById('text') 
content.innerText= " inner Context changed"

//Task2: select an HTML element by its class and change its background color.
const bgColor= document.querySelector('.bg')
bgColor.style.backgroundColor= 'red';

//why not with getElementByClassName ?
//document.getElementsByClassName('bg') : returns HTML COLLECTION, adding style possible through loop
// let bgColor = document.getElementsByClassName('bg');
// for (let i = 0; i < bgColor.length; i++) {
//     bgColor[i].style.color = 'red';
// }

//Activity2: Creating and Appending Elements
//Task3: Create a new "div" element with some text content and append it to the body

const div= document.createElement('div');
div.innerText="This is new div"
document.body.appendChild(div)

//Task4: Create new "li" element and add it to an existing ul list
const newLi= document.createElement('li')
newLi.textContent= "New list item"
document.querySelector('ul').appendChild(newLi)
 
//Activity3: Removing elements
//Task5: select an HTML element and remove it from DOM
const removePara=document.querySelector('div p')
removePara.remove()

//Task6: Remove the last child of specific HTML element
const lastChild=document.querySelector('ul li:last-child')
lastChild.remove()

//Activity4: Modifying attributes and Classes
//Task7: Select an HTMl element and change one of its attributes(e.g src of an img tag)
const image= document.querySelector('div img')
image.setAttribute('src', 'image3.jpeg')

//Task8: Add and remove CSS class to/from an HTML element
// const element= document.getElementById('task8')
const element = document.getElementById("task8");
element.classList.add("newClass");
element.classList.remove('oldClass')
// console.log(element.className) // to check className is added 

//Activity5: Event handling
//Task9: Add a click event listener to a button that changes the text content of paragraph
const button =document.getElementById('btn')
const para= document.getElementById('para')
//  button.addEventListener("click",function(){
//  para.textContent='Text has been changed Onclick'
// })

//Task10: Add a mouseover event listener to an element that changes its border color.
const borderColor= document.getElementById('task10') 
borderColor.addEventListener('mouseover', function () {
    this.style.borderColor= " red "
})
borderColor.addEventListener('mouseout', function() {
    this.style.borderColor = 'black'; 
})