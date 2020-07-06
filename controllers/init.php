<?php
session_start();
/********************************************
 * Insert user-record in users - defaults in status and profile
 ********************************************/
include '_common.php';

$user = $_GET['user'];
$datestamp = $_GET['key'];
$activity = $_GET['activity'];
$year = 2019;
$month = 12;
$day = 23;
$sel = 0;

/*
$datestamp = sprintf("%04u.%02u.%02u.%04u", $year, $month, $day, $sel);
//$sql = 'INSERT INTO scdata (`user`,`key`,`year`,`month`,`day`,`sel`,`activity`) VALUES (?,?,?,?,?,?,?)';
//$sql = 'DELETE FROM scdata WHERE `user`=?';
$sql = 'INSERT INTO scdata (user, datestamp, activity) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE user=?, datestamp=?, activity=?';
//$sql = 'SELECT distinct(`key`) FROM scdata WHERE `user`=?';
if (!($stmt = $conn->prepare($sql))) {
die("Prepare failed:" . $conn->error);
}

if (
$stmt &&
$stmt->bind_param("ssissi", $user, $datestamp, $activity, $user, $datestamp, $activity) &&
//    $stmt->bind_param("ssiiiii", $user, $key, $year, $month, $day, $sel, $activity) &&
//    $stmt->bind_param("s", $user) &&
$stmt->execute() &&
$stmt->store_result()
) {

echo 'ok... ' . $stmt->num_rows() . ' rows returned, ' . $stmt->affected_rows . ' rows affected<br>';
while ($row = $stmt->fetch()) {
echo $count . '<br>';
}

} else {
echo 'Prepared Statement Error: ' . $stmt->error;
}
 */

/*
$user = 'try';

$tta = array(0, 0, 0, 0);
if (($fp = fopen(__DIR__ . "/../sc-data2.dat", "r")) !== false) {
$pp = $_SESSION['user'];
fseek($fp, $pp * 20000);
$dd = fread($fp, 6);
$tt = fread($fp, intval($dd));
fclose($fp);
//$tta = json_decode($tt);
echo "file read ok:$tt<br><br>";
for ($x = 0; $x < 40; $x++) {
$sql = 'INSERT INTO scactivities (user, pos, fg, bg, fs, txt) VALUES(?, ?, ?, ?, ?, ?)';
if (!($stmt = $conn->prepare($sql))) {
die("Prepare failed:" . $conn->error);
}
echo 'rdy...' . $user . ', ' . $x . ', ';
if (
$stmt &&
$stmt->bind_param("ssssss", $user, $x, "black", "white", "8 px", "$x") &&
//            $stmt->bind_param("sissss", $user, $x, $tta[$x]->fg, $tta[$x]->bg, $tta[$x]->fs, $tta[$x]->text) &&
$stmt->execute() &&
$stmt->store_result()
) {
echo $x . ' ok...';
} else {
echo 'Prepared Statement Error: ' . $stmt->error;
}
echo '<br>';
}
fclose($fp);
}

$conn->close();
 */

$user = 'try';

for ($x = 0; $x < 40; $x++) {
    $sql = 'INSERT INTO scactivities (user, pos, fg, bg, fs, txt) VALUES(?, ?, ?, ?, ?, ?)';
    if (!($stmt = $conn->prepare($sql))) {
        die("Prepare failed:" . $conn->error);
    }
    echo 'rdy...' . $user . ', ' . $x . ', ';
    if (
        $stmt &&
        $stmt->bind_param("sissss", $user, $x, "black", "white", "8 px", "0") &&
        //            $stmt->bind_param("sissss", $user, $x, $tta[$x]->fg, $tta[$x]->bg, $tta[$x]->fs, $tta[$x]->text) &&
        $stmt->execute() &&
        $stmt->store_result()
    ) {
        echo $x . ' ok...';
    } else {
        echo 'Prepared Statement Error: ' . $stmt->error;
    }
    echo '<br>';
}

$conn->close();
