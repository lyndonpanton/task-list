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
            body: JSON.stringify(e.target.children[0].value)
        }).then(function (response) {
            // simple data "echoed" from the php file
            return response.text();
            // object data "echoed" from the php file
            // return response.json();
        }).then(function (data) {
            console.log(data);
        });

        let taskList = e.target.parentElement.children[2];
        let task = document.createElement("li");
        let text = document.createTextNode(
            e.target.children[0].value
        );

        task.appendChild(text);
        taskList.appendChild(task);

        e.target.children[0].value = "";
    }
});
