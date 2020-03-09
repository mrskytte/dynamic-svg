"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  createSquares();
}

function createSquares() {
  const body = document.querySelector("body");
  for (let i = 0; i < 40; i++) {
    body.appendChild(createRandomSquare());
  }
}

function createRandomSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.setProperty("--color", assignRandomColor());
  assignRandomPosition(square);
  return square;
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
  thisSquare.style.setProperty("--left", randomPositionValue());
  thisSquare.style.setProperty("--top", randomPositionValue());

  function randomPositionValue() {
    const value = Math.floor(Math.random() * 95);
    return `${value}%`;
  }
}
