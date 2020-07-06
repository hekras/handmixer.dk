<?php
if (($fp = fopen("sc-data.dat", "c+")) !== false){
    $r = $_GET['mel']; // possition in file
    $s = $_GET['sukker']; // selected activity
    $p = $_SESSION['user']; // user id

    $rr = $p*12*32*16 + $r;
    fseek($fp,$rr);
    $dd = sprintf("%02u", $s);
    fwrite($fp,$dd);
    fclose($fp);
    echo "ok";
}
