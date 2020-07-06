<?php
session_start();
/********************************************
 * Insert user-record in users - defaults in status and profile
 ********************************************/

include '_common.php';

$user = $_GET['user'];
$datestamp = $_GET['key'];
$activity = $_GET['sel'];

$sql = 'INSERT INTO scdata (user, datestamp, activity) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE user=?, datestamp=?, activity=?';
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed:" . $conn->error);
}

if (
    $stmt &&
    $stmt->bind_param("ssissi", $user, $datestamp, $activity, $user, $datestamp, $activity) &&
    $stmt->execute() &&
    $stmt->store_result()
) {
    echo 'ok... ' . $stmt->num_rows() . ' rows returned, ' . $stmt->affected_rows . ' rows affected<br>';
} else {
    echo 'Prepared Statement Error: ' . $stmt->error;
}

$conn->close();
