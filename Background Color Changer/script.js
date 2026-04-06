let button = document.querySelector("#btn");
let body = document.querySelector("#body");

button.addEventListener("click", function() {

    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    body.style.backgroundColor = color;
});
