"use strict";




const input = document.querySelector("#formName");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error");
const ok = document.querySelector("#ok");
const okText = document.querySelector("#ok-text");

btn.addEventListener("click", function ()  {
    let name = input.value.length;
    if (name < 3) {
        error.style = "display: block";
    }
    else {
        ok.style = "display: block";
        okText.innerHTML = `${input.value}`;
        console.log(`${input.value}`);
    }
})
