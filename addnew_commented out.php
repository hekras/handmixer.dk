<?php
    $fileName = 'users.txt';
    if ( !file_exists($fileName) ) {
        die();
    }
    if (($fp = fopen($fileName, "r"))!==false ) {
        $ss = stream_get_contents($fp);
        $user = $_POST['thomas'];
        $pass = $_POST['heidi'];
        $userid = 1000000;
        $ssa = explode('|', $ss );
        $fff = false;
        fclose($fp);
        foreach($ssa as $a){
            $b = explode(';', $a );
            if (strtolower($b[1]) == strtolower($user)){
                $fff = true;
            }
            if (intval($b[0])>=$userid){
                $userid = intval($b[0])+1;
            }
        }
        if (($fff)||(strpos($user,';') !== false)){
                include 'registrer.php';
        }
        else{
            if (($fpp = fopen($fileName, "a")) !== false){
                $bb = $userid.";".$user.";".$pass.";test|\r";
                fwrite($fpp,$bb);
                fclose($fpp);
                $pp = intval($userid) - 1000000;
                $_SESSION['user'] = $pp;
//                echo "addin new user: ".$bb;
                if (($fppp = fopen("sc-data.dat", "c")) !== false){
                    for($x = 0;$x < 12; $x++){
                        for($y = 1;$y < 32; $y++){
                                $r = $pp*12*32*4*4 + $x*32*4*4 + $y*4*4;
                                $d = "0000000000000000"; // 16 chars
                                fseek($fppp,$r);
                                fwrite($fppp,$d);
                        }
                    }
                    fclose($fppp);
                    if (($fpppp = fopen("sc-data2.dat", "c")) !== false){
                        $rr = $pp*20000;
//                echo "addin new user: ".$pp." : ".$rr;
                        $tt = '[{"text":"","fg":"black","bg":"white","fs":"8px"},{"text":1,"fg":"black","bg":"white","fs":"8px"},{"text":2,"fg":"black","bg":"white","fs":"8px"},{"text":3,"fg":"black","bg":"white","fs":"8px"},{"text":4,"fg":"black","bg":"white","fs":"8px"},{"text":5,"fg":"black","bg":"white","fs":"8px"},{"text":6,"fg":"black","bg":"white","fs":"8px"},{"text":7,"fg":"black","bg":"white","fs":"8px"},{"text":8,"fg":"black","bg":"white","fs":"8px"},{"text":9,"fg":"black","bg":"white","fs":"8px"},{"text":10,"fg":"black","bg":"white","fs":"8px"},{"text":11,"fg":"black","bg":"white","fs":"8px"},{"text":12,"fg":"black","bg":"white","fs":"8px"},{"text":13,"fg":"black","bg":"white","fs":"8px"},{"text":14,"fg":"black","bg":"white","fs":"8px"},{"text":15,"fg":"black","bg":"white","fs":"8px"},{"text":16,"fg":"black","bg":"white","fs":"8px"},{"text":17,"fg":"black","bg":"white","fs":"8px"},{"text":18,"fg":"black","bg":"white","fs":"8px"},{"text":19,"fg":"black","bg":"white","fs":"8px"},{"text":20,"fg":"black","bg":"white","fs":"8px"},{"text":21,"fg":"black","bg":"white","fs":"8px"},{"text":22,"fg":"black","bg":"white","fs":"8px"},{"text":23,"fg":"black","bg":"white","fs":"8px"},{"text":24,"fg":"black","bg":"white","fs":"8px"},{"text":25,"fg":"black","bg":"white","fs":"8px"},{"text":26,"fg":"black","bg":"white","fs":"8px"},{"text":27,"fg":"black","bg":"white","fs":"8px"},{"text":28,"fg":"black","bg":"white","fs":"8px"},{"text":29,"fg":"black","bg":"white","fs":"8px"},{"text":30,"fg":"black","bg":"white","fs":"8px"},{"text":31,"fg":"black","bg":"white","fs":"8px"},{"text":32,"fg":"black","bg":"white","fs":"8px"},{"text":33,"fg":"black","bg":"white","fs":"8px"},{"text":34,"fg":"black","bg":"white","fs":"8px"},{"text":35,"fg":"black","bg":"white","fs":"8px"},{"text":36,"fg":"black","bg":"white","fs":"8px"},{"text":37,"fg":"black","bg":"white","fs":"8px"},{"text":38,"fg":"black","bg":"white","fs":"8px"},{"text":39,"fg":"black","bg":"white","fs":"8px"}]';
1                        $dd = sprintf("%06u", strlen($tt));
                        fseek($fpppp,$rr);
                        fwrite($fpppp,$dd);
                        fwrite($fpppp,$tt);
                        fclose($fpppp);
                    }
                }
                else{
                    echo "unable to add new user, datafile access denied!";
                    die();
                }
            }
            else{
                echo "unable to add new user, userfile access denied!";
                die();
            }
        }
    }
