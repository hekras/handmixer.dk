<?php
session_start();
/********************************************
 * Insert user-record in users - defaults in status and profile
 ********************************************/
include '_common.php';

$user = $_GET['user'];
$year = 2019;
$month = 12;
$day = 23;
$sel = 0;
$activity = 0;

for ($y = 2019; $y < 2021; $y++) {
    $year = $y;
    for ($m = 1; $m < 13; $m++) {
        $month = $m;
        for ($d = 1; $d < 32; $d++) {
            $day = $d;
            for ($s = 1; $s < 9; $s++) {
                $sel = $s;
                $key = sprintf("%04u.%02u.%02u.%04u", $year, $month, $day, $sel);
                $sql = 'INSERT INTO scdata (`user`,`key`,`year`,`month`,`day`,`sel`,`activity`) VALUES (?,?,?,?,?,?,?)';
                if (!($stmt = $conn->prepare($sql))) {
                    die("Prepare failed:" . $conn->error);
                }
                $stmt->bind_param("ssiiiii", $user, $key, $year, $month, $day, $sel, $activity);
                if ($stmt->execute()) {
                    //echo $key . " - ok<br>";
                } else {
                    echo $key . " - error<br>";
                }
            }
        }
    }
    echo $y . " - ok<br>";
}

$conn->close();
