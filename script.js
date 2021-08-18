'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const textInput = document.querySelector('.text-input')

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', function () {
    textInput.textContent = 'My name is Damilola Akinlade'
    openModal()
})
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)