<?php
include "_common.php";

$sql = "UPDATE invader_editor_saves SET radius=1 WHERE savename IN (" . $_GET['name'] . ")";
//$sql = "DELETE FROM invader_editor_saves WHERE savename IN (" . $_GET['name'] . ")";

//die($sql);
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
