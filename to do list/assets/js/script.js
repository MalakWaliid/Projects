
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;

        const editBtn = li.querySelector(".editBtn");
        const deleteBtn = li.querySelector(".deleteBtn");

        editBtn.addEventListener("click", () => {
            const span = li.querySelector("span");
            const currentText = span.textContent;
            span.innerHTML = `<textarea>${currentText}</textarea>`;
            const textarea = li.querySelector("textarea");
            textarea.focus();

            textarea.addEventListener("blur", () => {
                const newText = textarea.value.trim();
                span.textContent = newText;
            });
        });

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}



		