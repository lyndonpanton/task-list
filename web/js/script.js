document.addEventListener("DOMContentLoaded", function (e) {
    let taskListForms = document.getElementsByClassName("task-list-form");

    for (let i = 0; i < taskListForms.length; i++) {
        taskListForms[i].addEventListener("submit", addTask);
    }

    function addTask(e) {
        e.preventDefault();

        fetch("form.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            // Send the id and parent task list data as well
            // body: JSON.stringify(e.target.children[0].value)
            body: JSON.stringify({
                // id = AUTO_INCREMENT
                "name": e.target.children[0].value,
                "categoryId": "3",
                // is_complete = false
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
            let text = document.createTextNode(data.name);

            task.appendChild(text);
            taskList.appendChild(task);

            e.target.children[0].value = "";
        });
    }
});
