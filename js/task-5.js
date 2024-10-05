'use strict';

const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', bodyColorChange);

function bodyColorChange() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;

  // Вирішив вивести для наглядності не тільки hex-формат, а й rgb-формат
  const bodyColor = bodyEl.style.backgroundColor;
  textEl.textContent = `hex: ${randomColor}, ${bodyColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
