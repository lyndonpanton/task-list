document.addEventListener("DOMContentLoaded", function (e) {
    // TEST
    setTimeout(function (e) {
        displayPopup(e, "error", "You did not do ... properly!");
    }, 1000);

    readTaskList();

    let taskListForms = document.getElementsByClassName("task-list-form");
    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    let taskCheckboxes = document.getElementsByClassName("task-checkbox");
    for (let i = 0; i < taskCheckboxes.length; i++) {
        taskCheckboxes[i].addEventListener("click", completeTask);
    }

    let taskInputs = document.getElementsByClassName("task-text");
    for (let i = 0; i < taskInputs.length; i++) {
        taskInputs[i].addEventListener("keypress", updateTaskText);
    }
    
    let taskPens = document.getElementsByClassName("task-update");
    for (let i = 0; i < taskPens.length; i++) {
        taskPens[i].addEventListener("click", toggleTaskEditable);
    }

    let taskCrosses = document.getElementsByClassName("task-delete");
    for (let i = 0; i < taskCrosses.length; i++) {
        taskCrosses[i].addEventListener("click", deleteTask);
    }

    function addTask(e) {
        e.preventDefault();

        let name = e.target.children[0].value;
        
        if (name.trim().length === 0) {
            displayPopup(e, "error", "You cannot create an empty task!");
            return;
        } else if (name.trim().length > 80) {
            displayPopup(e, "error", "You cannot create a task that has more than 80 characters long!");
            return;
        }

        let hyphenIndex = e.target.parentElement.id.indexOf("-");
        let categoryString = e.target.parentElement.id.substring(0, hyphenIndex);
        let categoryId;

        switch (categoryString) {
            case "appointment":
                categoryId = 1;
                break;
            case "cooking":
                categoryId = 2;
                break;
            case "entertainment":
                categoryId = 3;
                break;
            case "finance":
                categoryId = 4;
                break;
            case "fitness":
                categoryId = 5;
                break;
            case "shopping":
                categoryId = 6;
                break;
            case "social":
                categoryId = 7;
                break;
            case "study":
                categoryId = 8;
                break;
            case "work":
                categoryId = 9;
                break;
            default:
                categoryId = 1;
                break;
        }

        fetch("post.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            // Send the id and parent task list data as well
            // body: JSON.stringify(e.target.children[0].value)
            body: JSON.stringify({
                // id = AUTO_INCREMENT
                "name": name,
                "categoryId": categoryId
            })
        }).then(function (response) {
            // simple data "echoed" from the php file
            // return response.text();
            // object data "echoed" from the php file
            return response.json();
        }).then(function (data) {
            // Determine which task list to add the task to...

            let taskList = e.target.parentElement.children[2];
            
            let task = document.createElement("li");
            task.classList.add("task-list-item");
            task.id = "task-" + data.id;

            let completeIcon = document.createElement("i");
            completeIcon.classList.add("fa-solid", "fa-circle", "task-checkbox", "task-unchecked");

            let text = document.createElement("input");
            text.classList.add("task-text");
            text.type = "text";
            text.value = data.name;
            text.readOnly = true;
            text.disabled = true;

            let editElement = document.createElement("article");
            editElement.classList.add("task-edit");

            let updateIcon = document.createElement("i");
            updateIcon.classList.add("fa-solid", "fa-pen", "task-update");

            let deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-solid", "fa-circle-xmark", "task-delete");
            
            completeIcon.addEventListener("click", completeTask);
            text.addEventListener("keypress", updateTaskText);
            updateIcon.addEventListener("click", toggleTaskEditable);
            deleteIcon.addEventListener("click", deleteTask);

            editElement.appendChild(updateIcon);
            editElement.appendChild(deleteIcon);

            task.appendChild(completeIcon);
            task.appendChild(text);
            task.appendChild(editElement);
            taskList.appendChild(task);

            e.target.children[0].value = "";
        });
    }

    function completeTask(e) {
        let completeIcon = e.target;

        let id = e.target.parentElement.id.slice(
            e.target.parentElement.id.indexOf("-") + 1
        );
        let isComplete;

        // Change content...
        if (completeIcon.classList.contains("fa-circle")) {
            completeIcon.classList.remove("fa-circle");
            completeIcon.classList.add("fa-circle-check");

            completeIcon.classList.remove("task-unchecked");
            completeIcon.classList.add("task-checked");

            completeIcon.parentElement.getElementsByClassName("task-text")[0].classList.add("task-text-faded");

            isComplete = 1;
        } else {
            completeIcon.classList.remove("fa-circle-check");
            completeIcon.classList.add("fa-circle");
            
            completeIcon.classList.remove("task-checked");
            completeIcon.classList.add("task-unchecked");
            
            completeIcon.parentElement.getElementsByClassName("task-text")[0].classList.remove("task-text-faded");
            isComplete = 0;
        }

        console.log(isComplete);
        console.log(id);

        // Make fetch request and change database...
        fetch("put_complete.php", {
            method: "PUT",
            body: JSON.stringify({
                "id": id,
                "is_complete": isComplete
            })
        }).then(function (response) {
            return response.text();
            // return response.json();
        }).then(function (data) {
            // console.log(data);
        });
    }

    function deleteTask(e) {
        // Change content (remove task)...
        let task = e.target.parentElement.parentElement;
        let id = task.id.slice(task.id.indexOf("-") + 1);

        task.remove();

        // Make fetch request and change database...
        fetch("delete.php", {
            method: "DELETE",
            body: JSON.stringify({
                "id": id
            })
        }).then(function (response) {
            return response.text();
        }).then(function (data) {
            // console.log(data);
        });
    }

    function displayPopup(e, type, textContent) {
        console.log("Popup displayed");

        let container = document.getElementById("column-right");
        let box = document.createElement("article");
        box.id = "popup";

        let title = document.createElement("h2");
        title.classList.add("popup-title");

        if (type == "error") {
            box.classList.add("popup-error");
            title.textContent = "Error";
        } else {
            box.classList.add("popup-warning");
            title.textContent = "Warning";
        }

        let text = document.createElement("p");
        text.classList.add("popup-text");
        text.textContent = textContent;

        box.appendChild(title);
        box.appendChild(text);

        container.appendChild(box);

        setTimeout(function (e) {
            box.remove();
        }, 3000);
    }

    function readTaskList() {
        fetch("get.php", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(function (response) {
            // return response.text();
            return response.json();
        }).then(function (data) {
            // Use the response data to populate the document
            // console.log(data);
            let main = document.getElementsByTagName("main")[0];

            for (let task in data) {
                // console.log(data[task]["category_id"] - 1);
                // ids in database are 1-index wheresa ids in client
                // interface are 0-index
                let taskList = main
                        .getElementsByClassName("task-list")[data[task]["category_id"] - 1]
                        .getElementsByTagName("ul")[0];

                // Build task list item...          
                let currentTask = document.createElement("li");
                currentTask.classList.add("task-list-item");
                currentTask.id = "task-" + data[task]["id"];

                let completeIcon = document.createElement("i");
                completeIcon.classList.add("fa-solid", "task-checkbox");

                let text = document.createElement("input");
                text.classList.add("task-text");
                text.type = "text";
                text.value = data[task]["name"];
                text.readOnly = true;
                text.disabled = true;
                
                if (data[task]["is_complete"] === "1") {
                    completeIcon.classList.add("fa-circle-check");
                    completeIcon.classList.add("task-checked");

                    text.classList.add("task-text-faded");
                } else {
                    completeIcon.classList.add("fa-circle");
                    completeIcon.classList.add("task-unchecked");
                }

                let editElement = document.createElement("article");
                editElement.classList.add("task-edit");

                let updateIcon = document.createElement("i");
                updateIcon.classList.add("fa-solid", "fa-pen", "task-update");

                let deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fa-solid", "fa-circle-xmark", "task-delete");
            
                completeIcon.addEventListener("click", completeTask);
                text.addEventListener("keypress", updateTaskText);
                updateIcon.addEventListener("click", toggleTaskEditable);
                deleteIcon.addEventListener("click", deleteTask);

                editElement.appendChild(updateIcon);
                editElement.appendChild(deleteIcon);

                currentTask.appendChild(completeIcon);
                currentTask.appendChild(text);
                currentTask.appendChild(editElement);

                taskList.appendChild(currentTask);
            }
        });
    }

    function toggleTaskEditable(e) {
        // Do not allow if task is complete?...
        
        // Make all other tasks not editable...
        
        // Change content (editable, pen styling, textbox styling)...

        let taskPen;
        let taskInput;

        if (e.target.classList.contains("task-update")) {
            taskPen = e.target;
            taskInput = taskPen.parentElement.parentElement.getElementsByClassName("task-text")[0];
        } else {
            taskPen = e.target.parentElement.getElementsByClassName("task-update")[0];
            taskInput = e.target;
        }

        if (taskInput.readOnly === true) {
            taskInput.readOnly = false;
            taskInput.disabled = false;

            taskInput.classList.add("task-input-editing");
            taskPen.classList.add("task-pen-editing");
        } else {
            taskInput.readOnly = true;
            taskInput.disabled = true;

            taskInput.classList.remove("task-input-editing");
            taskPen.classList.remove("task-pen-editing");

            // Make fetch request and change database...
            updateTask(e);
        }
    }

    function updateTask(e) {

        // Update database

        // Is event on input field or pen icon?
        let id;
        let name;

        if (e.target.classList.contains("task-update")) {
            id = e.target.parentElement.parentElement.id.slice(
                e.target.parentElement.parentElement.id.indexOf("-") + 1
            );
            name = e.target.parentElement.parentElement.getElementsByClassName("task-text")[0].value;
        } else {
            id = e.target.parentElement.id.slice(
                e.target.parentElement.id.indexOf("-") + 1
            );
            name = e.target.value;
        }

        // Do not allow submission if task is empty (red outline, popup)...
        if (name.trim().length === 0) {
            displayPopup(e, "error", "You cannot update a task to be empty!");
            return;
        } else if (name.trim().length > 80) {
            displayPopup(e, "error", "You cannot update a task to be more than 80 characters long!");
            return;
        }

        fetch("put_edit.php", {
            method: "PUT",
            body: JSON.stringify({
                "id": id,
                "name": name
            }),
        }).then(function (response) {
            return response.text();
            // return response.json();
        }).then(function (data) {
            // console.log(data);
        });
    }

    function updateTaskText(e) {
        // Do not allow escape characters, character limit (see database
        // schema)...

        if (e.code == "Enter" && !e.target.readOnly) {
            toggleTaskEditable(e);
        }
    }
});
