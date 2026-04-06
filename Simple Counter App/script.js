let count = 0;

let countDisplay = document.querySelector("#count");
let increaseBtn = document.querySelector("#increase");
let decreaseBtn = document.querySelector("#decrease");


increaseBtn.addEventListener("click", function() {
    count++;
    countDisplay.innerText = count;
});


decreaseBtn.addEventListener("click", function() {
    count--;
    countDisplay.innerText = count;
});
