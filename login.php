<?php
    $fileName = 'users.txt';
    if (($fp = fopen($fileName, "r"))!==false ) {
        $ss = stream_get_contents($fp);
        $user = $_POST['thomas'];
        $pass = $_POST['heidi'];
        $ssa = explode('|', $ss );
        $fff = false;
        fclose($fp);
        foreach($ssa as $a){
            $b = explode(';', $a );
            if ((strtolower($b[1]) == strtolower($user))&&($b[2] == $pass)){
                $pp = intval($b[0]) - 1000000;
                $_SESSION['user'] = $pp;
                $fff = true;
            }
        }
    }

