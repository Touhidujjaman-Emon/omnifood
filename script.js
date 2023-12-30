'use strict'

const headerEl = document.querySelector('.header');
console.log(headerEl );
const btnNavEl = document.querySelector('.btn-mbl-nav');
console.log(btnNavEl );

btnNavEl.addEventListener('click' , function(){
headerEl.classList.toggle('nav-open');
})