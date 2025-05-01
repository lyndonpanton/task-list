<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    // Is there a DELETE request?
    if (isset($_SERVER["REQUEST_METHOD"]) == "DELETE") {
        $conn = new mysqli($host, $user, $password, $name);

        // php://input allows reading raw data from the request body
        $data = file_get_contents("php://input");
        // true means that it will return an array, otherwise an object
        $task = json_decode($data, true);

        $id = $task["id"];

        $statement = "DELETE FROM tasks
                WHERE id = $id";
        $result = $conn->query($statement);

        if ($result == TRUE) {
            echo "Task deleted from the database";
        }
    }
?>
