"use strict";

const images = document.querySelectorAll(".img");
const next = document.querySelector("#btn-next");
const previous = document.querySelector("#btn-previous");
const itemCount = images.length;
let count = 0;

next.addEventListener('click', showNextItem);
previous.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

function showNextItem () {
    images[count].classList.remove('active');
    count < itemCount - 1 ? count++ : count = 0;
    images[count].classList.add('active');
}

function showPreviousItem() {
    images[count].classList.remove('active');
    count > 0 ? count-- : count = itemCount - 1;
    images[count].classList.add('active');
// console.log(count);
}

function keyPress(e) {
    e.keyCode == '37' ? showPreviousItem() : showNextItem();
}

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");




document.addEventListener("keydown", (e) => {
    
    switch (e.code) {
        case "Numpad1":
            img1.classList.add('active');
            break;
        case "Numpad2":
            images.forEach(img => {
                img.classList.add('active');
                img2.classList.add('active');
            })
            ;
            break;
        case "Numpad3":
            img3.classList.add('active');
            break;
        case "Numpad4":
            img4.classList.add('active');
            break;
        case "Numpad5":
            img5.classList.add('active');
            break;
        case "Numpad6":
            img6.classList.add('active');
            break;
        case "Numpad7":
            img7.classList.add('active');
            break;
        case "Numpad8":
            img8.classList.add('active');
            break;
        case "Numpad9":
            img9.classList.add('active');
            break;
    }
})
