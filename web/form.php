<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    // Is there a POST request
    if (isset($_POST)) {
        // php://input allows reading raw data from the request body
        $data = file_get_contents("php://input");
        // true means that it will return an array, otherwise an object
        $task = json_decode($data, true);

        $conn = new mysqli(DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME);

        // Determine which table to add to
        // Create it is it does not already exists
        // Add the todo item to the table



        // simple data to send as a promise to the javascript file
        echo $task;
        // if you want to send an entire object, you can encode it
        // echo json_encode(/* object */);
    }
?>
