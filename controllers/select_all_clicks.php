<?php
include "_common.php";

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
