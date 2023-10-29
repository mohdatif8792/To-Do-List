const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="text" class="task-input" value="${taskText}" disabled>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        alert("Task added successfully.");
        // Edit task
        const editButton = li.querySelector(".edit-btn");
        const taskInputField = li.querySelector(".task-input");
        editButton.addEventListener("click", function() {
            if (taskInputField.disabled) {
                taskInputField.disabled = false;
                taskInputField.focus();
                editButton.textContent = "Save";
                alert("You can now edit the task.");
            } else {
                taskInputField.disabled = true;
                editButton.textContent = "Edit";
                alert("Task updated successfully.");
            }
        });

        // Delete task
        const deleteButton = li.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
            alert("Task deleted.");
        });
    }
});