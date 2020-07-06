<?php
include "_common.php";

$sql = "UPDATE clickcounters SET clicks=clicks+1 WHERE id=?";
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed (2):" . $conn->error);
}
$stmt->bind_param("i", $id);
$id = $_GET['id'];
$result = $stmt->execute();

$sql = "SELECT * FROM clickcounters ORDER BY id";

$resultsd1 = mysqli_query($conn, $sql);

$first = true;
echo '[';
while ($row = mysqli_fetch_assoc($resultsd1)) {
    if ($first) {
        $first = false;
    } else {
        echo ',';
    }
    echo json_encode($row);
}
echo ']';

$conn->close();
