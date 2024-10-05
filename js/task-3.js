'use strict';

const textInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  if (event.target.value === '' || event.target.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.target.value.trim();
  }
});

//Додав очищення input при втраті фокусу, у разі, якщо він пустий або введені одні пробіли

textInput.addEventListener('blur', event => {
  if (event.target.value === '' || event.target.value.trim() === '') {
    event.target.value = '';
  }
});
