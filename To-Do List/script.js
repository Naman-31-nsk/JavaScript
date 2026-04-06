let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {

    let task = input.value;

    if (task === "") return;

    
    let li = document.createElement("li");
    li.innerText = task;

    li.className = "bg-gray-200 p-2 rounded cursor-pointer";

  
    li.addEventListener("click", function() {
        li.remove();
    });

    list.appendChild(li);

    input.value = ""; // clear input
});
