<?php
include "_common.php";

$sql = "SELECT savename,step,command,x,y FROM invader_editor_saves WHERE savename = '" . $_GET['name'] . "' AND radius=0 ORDER BY step";

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
