'use strict';
//overlay is actually the blur film on the bottons on background when the modal part is displayed
//we store the selections in variables like it is done below so that we can use the variable multiple times in the file at ease
const modal = document.querySelectorAll('.modal');
const overlay  = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
    console.log("Button clicked");
    //to display the modal
    //to act on a class of HTML, we use classList property of modal class. 
    modal.classList.remove('hidden')//to add multiple multiple classes to be removed ('hidden', 'btn'..)
    //('.hidden') is used only for selector and here it is('hidden')
    overlay.classList.remove('hidden');

    // //we could also change the css value of display property of HIDDEN class 
    // modal.style.display = 'block';
}



//we want to implement a feature of closing the modal window by pressing esc key
//keyboard event listener is a global event i.e. we can't use it on a single particular html element
//and global events are listened on whole document so
document.addEventListener('keydown',function(e){ //so far we never tried to access the "event" object of addEventlistener
    //e stands for event object passed as parameter
    if(e.key === 'Escape'){
     for(let i = 0; i<modal.length; i++){
        if(!modal[i].classList.contains('hidden'))
        {//key is a property of keyboard event e which reads the type of key pressed like spacebar, esc key
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
        }
}
}
});
//there are three keyboard events i.e. keydown, keypress and keyup
// keyup - when we lift a key off the Keyboard
//keydown - as soon as we press down a key
//keypress - fired continuously press a key


//to access the text content of all the  three show modal buttons
//we could run a for loop because we have used query selectorall instead of query selectorall(it forms a array like structure)
for(let i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        modal[i].classList.remove('hidden');
        overlay[i].classList.remove('hidden');
    });
} 

for(let i = 0; i<btnCloseModal.length; i++){
    btnCloseModal[i].addEventListener('click',function(){
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
    });
} 

//we want to able to close the model even if we click on the overlay
//if we copy the above function for overlay variable as well, code would be longer. we instead create a function closeModal
for(let i = 0; i<overlay.length; i++){
    overlay[i].addEventListener('click',function(){
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
    });
} 