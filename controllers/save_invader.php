<?php
include "_common.php";

//$sql = "DELETE FROM invader_editor_saves WHERE savename = 'buller'";
//$resultsd1 = mysqli_query($conn, $sql);

$sql = "INSERT INTO invader_editor_saves (savename,step,command,x,y,startangle,stopangle,radius) VALUES (?,?,?,?,?,0,0,0);";
if (!($stmt = $conn->prepare($sql))) {
    die("Prepare failed (1):" . $conn->error);
}
$steps = $_GET['steps'];
$obj = json_decode($_GET["data"], true);

//die("tjek!:" . $steps);
for ($i = 0; $i < $steps; $i++) {
    $stmt->bind_param("sisii", $name, $step, $cmd, $x, $y);
    $name = $_GET['name'];
    $step = $i;
    $cmd = $obj[$i]["command"];
    $x = $obj[$i]["x"];
    $y = $obj[$i]["y"];
    $result = $stmt->execute();
    if ($result) {
        echo 'ok';
    } else {
        echo $conn->error;
    }
}

$conn->close();
