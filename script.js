"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  createSquares();
}

function createSquares() {
  for (let i = 0; i < 40; i++) {
    const square = document.querySelector("template").content;
    const copiedSquare = square.cloneNode(true);

    copiedSquare.querySelector(
      ".square"
    ).style.backgroundColor = assignRandomColor();
    assignRandomPosition(copiedSquare);

    document.querySelector("body").appendChild(copiedSquare);
  }
}

function assignRandomColor() {
  const r = randomRGBValue();
  const g = randomRGBValue();
  const b = randomRGBValue();

  return `rgb(${r}, ${g}, ${b})`;

  function randomRGBValue() {
    const randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
  }
}

function assignRandomPosition(thisSquare) {
  thisSquare.querySelector(".square").style.left = randomPositionValue();
  thisSquare.querySelector(".square").style.top = randomPositionValue();

  function randomPositionValue() {
    const value = Math.floor(Math.random() * 95);
    return `${value}%`;
  }
}
