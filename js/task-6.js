'use strict';

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

let sizes = 30;

createBtn.addEventListener('click', createMarkUp);
destroyBtn.addEventListener('click', () => {
  inputEl.value = '';
  divEl.innerHTML = '';
});

function createMarkUp() {
  if (inputEl.value < 1 || inputEl.value > 100) {
    console.log('Error');
    inputEl.value = '';
    clear();
    return;
  }

  createBoxes(inputEl.value);
}

function clear() {
  divEl.innerHTML = '';
  sizes = 30;
}

function createBoxes(amount) {
  clear();
  let boxes = '';
  for (let i = 0; i < amount; i++) {
    const box = `<div style="width: ${sizes}px; height: ${sizes}px; background-color: ${getRandomHexColor()};"></div>`;
    boxes += box;
    sizes += 10;
  }
  // divEl.insertAdjacentHTML('afterbegin', boxes);
  divEl.innerHTML = boxes;
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function createBoxes(amount) {
//   clear();
//   for (let index = 0; index < amount; index++) {
//     const box = document.createElement('div');
//     box.style.width = `${sizes}px`;
//     box.style.height = `${sizes}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     // console.log(box);
//     divEl.append(box);
//     inputEl.value = '';
//     sizes += 10;
//   }
// }
