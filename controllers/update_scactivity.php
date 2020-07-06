<?php
session_start();
/********************************************
 * Insert user-record in users - defaults in status and profile
 ********************************************/
include '_common.php';

$user = $_GET['user'];
$pos = $_GET['pos'];
$fg = $_GET['fg'];
$bg = $_GET['bg'];
$fs = $_GET['fs'];
$text = $_GET['text'];

$user = 'try';

$sql = 'UPDATE scactivities SET fg=?, bg=?, fs=?, txt=? WHERE user=? AND pos=?';
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed:" . $conn->error);
}
if (
    $stmt &&
    $stmt->bind_param("sssssi", $fg, $bg, $fs, $text, $user, $pos) &&
    $stmt->execute() &&
    $stmt->store_result()
) {
    echo $x . ' ok...';
} else {
    echo 'Prepared Statement Error: ' . $stmt->error;
}

/*

$conn->close();
