'use strict';
//overlay is actually the blur film on the bottons on background when the modal part is displayed
//we store the selections in variables like it is done below so that we can use the variable multiple times in the file at ease
const modal = document.querySelectorAll('.modal');
const overlay  = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


//to open the modal window by clicking the modal button
for(let i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        modal[i].classList.remove('hidden');
        overlay[i].classList.remove('hidden');
    });
} 

//to close the modal window by clicking on the close button
for(let i = 0; i<btnCloseModal.length; i++){
    btnCloseModal[i].addEventListener('click',function(){
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
    });
} 

//to close the modal window by just clicking on the overlay
for(let i = 0; i<overlay.length; i++){
    overlay[i].addEventListener('click',function(){
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
    });
} 

//to close the modal window by pressing escape key
document.addEventListener('keydown',function(e){ 
    if(e.key === 'Escape'){
     for(let i = 0; i<modal.length; i++){
        if(!modal[i].classList.contains('hidden'))
        {
        modal[i].classList.add('hidden');
        overlay[i].classList.add('hidden');
        }
    }
}
});
