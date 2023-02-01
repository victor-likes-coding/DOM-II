import "./less/index.less";

// Your code goes here!
console.log("Hooked");

// hover effect changing color of text
const h1 = document.querySelector(".logo-heading");
let timeoutId = null;

const getRandomColorValue = () => {
    return Math.floor(Math.random() * 255);
};

h1.addEventListener("mouseenter", (_) => {
    timeoutId = setInterval(() => {
        // every 1 second change the color of the text
        const red = getRandomColorValue();
        const green = getRandomColorValue();
        const blue = getRandomColorValue();
        const color = `rgb(${red}, ${green}, ${blue})`;
        h1.setAttribute("style", `color: ${color}; cursor: pointer`);
    }, 500);
});

h1.addEventListener("mouseout", (_) => {
    if (timeoutId) {
        clearInterval(timeoutId);
    }
});

h1.addEventListener("click", (_) => {
    if (timeoutId) {
        clearInterval(timeoutId);
    }
});

// const contact = document.querySelector("nav .nav-link:nth-child(4)");

// const createModel = () => {
//     const modal = document.createElement("div");
//     const h2 = document.createElement("h2");
//     const pEmail = document.createElement("p");
//     const pPhone = document.createElement("p");
//     h2.textContent = "Contact me";
//     pEmail.textContent = "Email: contactme@spam.com";
//     pPhone.textContent = "Phone: 1 (888) 666-1738";
//     modal.appendChild(h2);
//     modal.appendChild(pEmail);
//     modal.appendChild(pPhone);

//     return modal;
// };
