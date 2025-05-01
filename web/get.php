<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    // Is there a GET request?
    if (isset($_GET)) {
        $conn = new mysqli($host, $user, $password, $name);

        $statement = "SELECT id, name, category_id, is_complete FROM tasks";
        $result = $conn->query($statement);

        if ($result == TRUE) {
            $tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode($tasks);
        }
    }
?>
