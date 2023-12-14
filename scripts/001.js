"use strict";



const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => { btn.addEventListener("click", replacement) });

function replacement(e) {
    switch (true) {
        case (e.target.id == "btn1"):
            text1.textContent = text3.textContent;
            break;
        case (e.target.id == "btn2"):
            text2.textContent = text1.textContent;
            break;
        case (e.target.id == "btn3"):
            text3.textContent = text2.textContent;
            break;
    }
}

const lists = document.querySelectorAll("li");

lists.forEach(list => {
    list.addEventListener("click", function () {
        list.style.display = "none";
        console.log(list.textContent);
    })
});


