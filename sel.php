<?php
$n = $_GET['n']; // index of the sel
$x = $_GET['ella']; // JSON of the sel
$p = $_SESSION['user']; // user id

if (($fp = fopen("sc-data2.dat", "c+")) !== false){
    $r = $p*20000;
    fseek($fp,$r);
    $l = intval(fread($fp,6)); // read length of JSON
    $t = fread($fp,$l);     // read JSON
    $a = json_decode($t);
    $b = json_decode($x);

    $a[$n]->text = $b->text;
    $a[$n]->fg = $b->fg;
    $a[$n]->bg = $b->bg;
    $a[$n]->fs = $b->fs;

    $tt = json_encode($a);
    $dd = sprintf("%06u", strlen($tt));
    fseek($fp,$r);
    fwrite($fp,$dd);
    fwrite($fp,$tt);
    fclose($fp);
    echo "ok";
}
