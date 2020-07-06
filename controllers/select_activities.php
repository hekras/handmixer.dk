<?php
session_start();
/********************************************
 *
 ********************************************/
include '_common.php';

$user = $_GET['user'];
$year = $_GET['year'] . '%';
$jsonoutput = array();
$sql = 'SELECT datestamp, activity FROM scdata WHERE user=? AND datestamp LIKE ? AND activity<>0';
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed:" . $conn->error);
}

if (
    $stmt &&
    $stmt->bind_param("ss", $user, $year) &&
    $stmt->execute() &&
    $stmt->store_result() &&
    $stmt->bind_result($datestamp, $activity)
) {
    while ($row = $stmt->fetch()) {
        $jsonoutput[] = array("key" => $datestamp, "activity" => $activity);
    }
    echo json_encode($jsonoutput);

} else {
    echo '[]';
}

$conn->close();
