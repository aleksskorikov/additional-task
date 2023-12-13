"use strict";



const list = document.querySelector("select");

const products = document.querySelectorAll("#product");


function filter() {
    list.addEventListener(`click`, event => {
        const targetid = event.target.value
        console.log(targetid);

        switch (targetid) {
            case "all":
                itrms("product");
            break;
            case "spin":
                itrms(targetid);
            break;
            case "kast":
                itrms(targetid);
            break;
            case "fid":
                itrms(targetid);
            break;
            case "karp":
                itrms(targetid);
            break;
        }
    })
}
filter();

function itrms(className) {
    products.forEach(product => {
        if (product.classList.contains(className)) {
            product.style = `display: block`;
        }
        else {
            product.style = `display: none`;
        }
    })
}