<?php
include "_common.php";

$sql = "SELECT * FROM clickcounters WHERE id=?";
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed (2):" . $conn->error);
}
$stmt->bind_param("i", $id);
$id = $_GET['id'];
$result = $stmt->execute();
$clicks = -1;
if ($result) {
    $stmt->bind_result($i, $c);
    $n = 0;
    while ($stmt->fetch()) {
        if ($n === 0) {
            $clicks = $c;
        }
        ++$n;
    }
    echo $clicks;
} else {
    echo $conn->error;
}

$conn->close();
