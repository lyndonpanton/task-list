<?php
    include("config.php");

    $host = DATABASE_HOST;
    $user = DATABASE_USER;
    $password = DATABASE_PASSWORD;
    $name = DATABASE_NAME;

    if (isset($_SERVER["REQUEST_METHOD"]) == "PUT") {
        $conn = new mysqli($host, $user, $password, $name);

        echo "PUT request was sent successfully";
    }
?>