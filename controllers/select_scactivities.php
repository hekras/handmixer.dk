<?php
session_start();
/********************************************
 *
 ********************************************/
include '_common.php';

$user = $_GET['user'];
$jsonoutput = array();
$sql = 'SELECT pos, fg, bg, fs, txt FROM scactivities WHERE user=?';
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed:" . $conn->error);
}

if (
    $stmt &&
    $stmt->bind_param("s", $user) &&
    $stmt->execute() &&
    $stmt->store_result() &&
    $stmt->bind_result($pos, $fg, $bg, $fs, $text)
) {
    while ($row = $stmt->fetch()) {
        $jsonoutput[] = array("x" => $pos, "fg" => $fg, "bg" => $bg, "fs" => $fs, "text" => $text);
    }
    echo json_encode($jsonoutput);

} else {
    echo '[]';
}

$conn->close();
