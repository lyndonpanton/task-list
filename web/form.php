<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    // Is there a POST request?
    if (isset($_POST)) {
        // php://input allows reading raw data from the request body
        $data = file_get_contents("php://input");
        // true means that it will return an array, otherwise an object
        $task = json_decode($data, true);

        $conn = new mysqli($host, $user, $password, $name);

        // Determine which table to add to
        // Create it is it does not already exists
        // Add the todo item to the table

        $name = $task["name"];
        $category_id = $task["categoryId"];
        
        $statement = "INSERT INTO tasks (name, category_id, is_complete)
                VALUES (
                    '$name', $category_id, 0
                );";
        $result = $conn->query($statement);

        if ($result == TRUE) {
            // Read new item
            // $tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $task["id"] = $conn->insert_id;
            // $task["id"] = $tasks[0]["id"];
            // print_r($result);

            // send primitive data as a promise to the javascript file
            // echo $name;
            // echo $category_id;

            // if you want to send an entire object, you should encode it
            echo json_encode($task);
        }
    }
?>
