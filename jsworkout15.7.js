// const heading= document.getElementById('heading');
// console.log(heading);
// console.log(typeof heading);

// const list = document.getElementById('list');
// console.log(list.textContent);

// // list.textContent='hi thereee' ;

// console.log(list.innerHTML);

// list.innerHTML='<h1>Yo bro</h1> '


// const list = document.querySelector('.list');
// console.log(list);

// const lis = document.querySelectorAll('ul li');
// console.log(lis);

//  const listItems= document.querySelectorAll('listItems');
//  console.log("listItems");

// const heading= document.getElementById('heading');
// heading.style.backgroundColor='green';
// heading.style.color='blue';


// const lis= document.querySelectorAll("ul li");
// console.log(lis);

// lis[1].style.backgroundColor="red";
// lis[0].style.backgroundColor="orange";
// lis[2].style.backgroundColor="yellow";


// const heading = document.querySelector('.heading');
// const btn = document.querySelector('.btn');


// we can also use other things like mouseover mouseout keypress and others
// btn.onclick= () =>
// {
//     console.log('Clicked');
// };

// btn.onmouseover = () => 
// {
//     headiong.style.backgroundColor= "green";
// };
// btn.onmouseout = () => 
// {
//     headiong.style.backgroundColor= "lightgreen";
// };


// function clickMe()
// {
//     console.log("Clicked");
// }


// btn.addEventListener('click', e => {
//     // heading.style.cssText='background-color: brown; color:white';
//     console.log(e.target);
// });

// const paragraph = document.querySelector('.paragraph');
// console.log(paragraph.getAttribute('id'));
// console.log(paragraph.getAttribute('class'));
// console.log(paragraph.getAttribute('title'));


// paragraph.setAttribute('style', 'background-color:coral')

// paragraph.removeAttribute('style');

// console.log(paragraph.hasAttribute('style'));
// console.log(paragraph.hasAttribute('class'));




// new example



// const listItem = document.getElementById('list-item');

// console.log(listItem.parentElement);
// console.log(listItem.parentNode);
// // these are both the same 

// console.log(listItem.parentElement.parentNode);


// const list = document.querySelector('.list');
// console.log(list.childNodes);                   //here we are calling all Nodes including text or elements which are not visible (spacings)
// console.log(list.children);                     // here we are calling out to the console only html elements without  any other nodes. 
// console.log(list.firstChild); // we gonna call a first child which is actually #text and not an element itself
// console.log(list.firstElementChild);   // here however we are calling out the first element in the list whic is first Home <li>
// // By doing that we can call elements from the HTML into the console by using parentElement or parentNode thing/

// console.log(listItem.previousSibling);
// console.log(listItem.nextSibling);
// console.log(listItem.previousElementSibling);
// console.log(listItem.nextElementSibling);
// same story but for the previous sibling and element



const newEl = document.createElement ('li');

//Here we are created <li> element
// console.log(newEl);


const text = document.createTextNode ('Blog');
//console.log(text);

newEl.appendChild(text);
console.log(newEl);



const list = document.querySelector('.list');
list.appendChild(newEl);
list.insertBefore(newEl, list.children[0]);

list.removeChild(newEl);
console.log(list);

