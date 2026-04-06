let loadBtn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        showUsers(data);
    } catch (error) {
        usersDiv.innerHTML = "Error loading data";
        console.log(error);
    }
}


function showUsers(users) {
    usersDiv.innerHTML = "";

    users.forEach(user => {
        let card = `
            <div class="bg-white p-4 rounded-lg shadow">
                <h2 class="text-xl font-semibold">${user.name}</h2>
                <p class="text-gray-600">${user.email}</p>
            </div>
        `;
        usersDiv.innerHTML += card;
    });
}

loadBtn.addEventListener("click", fetchUsers);
