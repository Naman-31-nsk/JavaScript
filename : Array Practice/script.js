
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let original = document.getElementById("original");
let result = document.getElementById("result");
let doubleBtn = document.getElementById("doubleBtn");
let evenBtn = document.getElementById("evenBtn");


original.innerText = "Original: " + numbers.join(", ");

doubleBtn.addEventListener("click", function() {
    let doubled = numbers.map(num => num * 2);
    result.innerText = "Doubled: " + doubled.join(", ");
});

evenBtn.addEventListener("click", function() {
    let evens = numbers.filter(num => num % 2 === 0);
    result.innerText = "Even: " + evens.join(", ");
});
