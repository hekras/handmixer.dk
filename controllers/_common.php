<?php

$servername = "localhest";
$username = "rootbeeer";
$password = "shanti";
$database = "handmyxer_dk";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    $str = 'Error: unable to connect to the database.';
    die($str); //die("err: database connection failed: " . $conn->connect_error);
}
$conn->set_charset('utf8mb4');
