"use strict";



const list = document.querySelector("select");
const products = document.querySelectorAll("#product");

function filter() {
    list.addEventListener(`click`, event => {
        const targetid = event.target.value
        console.log(targetid);

        switch (targetid) {
            case "all":
                items("product");
            break;
            case "spin":
                items(targetid);
            break;
            case "kast":
                items(targetid);
            break;
            case "fid":
                items(targetid);
            break;
            case "karp":
                items(targetid);
            break;
        }
    })
}
filter();

function items(className) {
    products.forEach(product => {
        product.classList.contains(className) ? product.style = `display: block` : product.style = `display: none`;
    })
}