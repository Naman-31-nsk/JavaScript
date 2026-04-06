
let user = {
    name: "Lucky",
    age: 20,
    city: "Ujjain"
};


let card = document.getElementById("card");
let showBtn = document.getElementById("showBtn");


showBtn.addEventListener("click", function() {
    card.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>City:</strong> ${user.city}</p>
    `;
});
