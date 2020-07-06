<!DOCTYPE html>
<html>

<head>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: sans-serif;
        }

        .box1 {
            height: 32px;
            width: 32px;
            box-sizing: border-box;
            border: 1px solid gray;
            position: absolute;
            overflow: hidden;
        }

        .box2 {
            height: 32px;
            width: 20px;
            box-sizing: border-box;
            border: 1px solid gray;
            position: absolute;
            overflow: hidden;
        }

        .box3 {
            height: 32px;
            width: 20px;
            box-sizing: border-box;
            border: 1px solid gray;
            position: absolute;
            overflow: hidden;
        }

        .box4 {
            height: 32px;
            width: 144px;
            box-sizing: border-box;
            border-top: 2px solid black;
            border-left: 2px solid black;
            border-right: 2px solid black;
            position: absolute;
            overflow: hidden;
        }

        .box5 {
            height: 32px;
            width: 64px;
            box-sizing: border-box;
            position: absolute;
            overflow: hidden;
        }

        .box6 {
            height: 32px;
            width: 32px;
            box-sizing: border-box;
            border: 1px solid gray;
            position: absolute;
            overflow: hidden;
            cursor: pointer;
        }

        .box7 {
            height: 32px;
            width: 32px;
            box-sizing: border-box;
            border: 1px solid gray;
            position: absolute;
            overflow: hidden;
            cursor: pointer;
        }

        .box8 {
            height: 26px;
            width: 26px;
            box-sizing: border-box;
            position: absolute;
            cursor: pointer;
            visibility: inherit;
        }

        .textcentered {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .textleft {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 70%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .textlow {
            margin: 0;
            position: absolute;
            top: 75%;
            left: 70%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            text-align: right;
        }

        .texthigh {
            margin: 0;
            position: absolute;
            top: 20%;
            left: 30%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            text-align: left;
        }

        .year {
            font-size: 24px;
            font-weight: bold;
            line-height: 95%;
            color: black;
            word-wrap: normal;
            display: block;
        }

        .month {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            line-height: 95%;
            color: black;
            word-wrap: normal;
            display: block;
        }

        .weekday {
            font-size: 10px;
            line-height: 95%;
            color: black;
            word-wrap: normal;
            display: block;
        }

        .weeknumber {
            font-size: 8px;
            font-weight: bold;
            line-height: 95%;
            color: black;
            word-wrap: normal;
            display: block;
        }

        .daynumber {
            font-size: 12px;
            font-weight: bold;
            line-height: 95%;
            color: black;
            word-wrap: normal;
            display: block;
        }

        activity {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            text-align: center;
            line-height: 95%;
            word-wrap: normal;
            display: block;
        }
    </style>
</head>

<body>
    <div>
        <div class="box5" style="left: 21px; top: 5px;">
            <span id="donkey" class="textcentered year">2019</span>
        </div>
        <a onclick="window.close()">
        <div class="box1" style="left: 1695px; top: 5px; cursor: pointer;" >
            <span class="textcentered">❌</span>
        </div></a>
        <div class="box1" style="left: 1360px; top: 5px; cursor: pointer;" onclick='getirene()' >
            <span class="textcentered">📅</span>
        </div>
        <div class="box1" style="left: 1391px; top: 5px; cursor: pointer;" onclick='getnicho()' >
            <span class="textcentered">⌨</span>
        </div>
    </div>
<?php
// render the selectable activites on the top
$tta = array(0,0,0,0);
if (($fp = fopen("sc-data2.dat", "r")) !== false){
    $pp = $_SESSION['user'];
    fseek($fp,$pp*20000);
    $dd = fread($fp,6);
    $tt = fread($fp,intval($dd));
    fclose($fp);
    $tta = json_decode($tt);
    for($x=0;$x<40;$x++){
        echo '<div class="box7" id="ass'.$x.'" style="left: '.(100+$x*31).
        'px; top: 5px; font-size:'.$tta[$x]->fs.
        ';background: '.$tta[$x]->bg.
        ';color: '.$tta[$x]->fg.
        '" key="'.$x.'" onclick="select(this)" onmousedown="md()" onmouseup="mu()" onmouseout="mu()"><activity>'.$tta[$x]->text.'</activity></div>';
    }
    fclose($fp);
}

echo '<div id="irene" style="visibility: visible;">';
// render the calender
$y=2019;
$kd = array("m", "t", "o", "t", "f", "l","s");
if (($fp = fopen("sc-data.dat", "r")) !== false){
    $pp = $_SESSION['user'];
    for ($dd = 1; $dd < 32; $dd++) {
        $ypos = (40 + $dd * 31);
        echo '<div class="box2" style="left: 2px; top: '.$ypos.'px;">';
        echo '<span class="textcentered daynumber">'.$dd.'</span>';
        echo '</div>';
    }
    for($m=1;$m<13;$m++){
        $xoff = 21 + (($m-1) * 142);
        echo '<div class="box4" style="left: '.$xoff.'px; top: 40px;">'.
            '<span class="textcentered month">'.date('F', mktime(0,0,0,$m,1,$y)).
            '</span></div>';
        for ($dd = 1; $dd < 32; $dd++) {
            if ($m == intval( date('n', mktime(0,0,0,$m,$dd,$y)))){
                $ypos = (40 + $dd * 31);
                $sd = intval(date('N', mktime(0,0,0,$m,$dd,$y)));
                $lastday = ($m != intval( date('n', mktime(0,0,0,$m,$dd+1,$y)))) ? " border-bottom: solid black 2px;" : "";
                $weekchange = (($dd == 1) || ($sd == 1)) ? " border-top: solid black 2px;" : "";
                // render day and weeknumber
                echo '<div class="box2" style="left: '.$xoff.'px; top: '.$ypos.'px; border-left: solid black 2px;';
                if (($sd == 7) || ($sd == 6)) {
                    echo " background: pink;";
                }
                echo $weekchange.$lastday.'"><span class="textlow weekday">'.$kd[$sd-1].'</span>';
                if (strlen($weekchange) > 1) {
                    echo '<span class="texthigh weeknumber">'.intval(date('W', mktime(0,0,0,$m,$dd,$y))).'</span>';
                }
                echo '</div>';
                // render selectables
                $q = ($m-1)*32*16 + $dd*16;
                $r = $pp*12*32*16;
                $d = "0000000000000000"; // 16 chars
                fseek($fp,$r+$q);
                for($s=0;$s<4;$s++){
                    $ii = intval(fread($fp,2));
                    $bor = ($s == 3) ? " border-right: solid black 2px;" : "";
                    echo '<div class="box6" style="left: '.($xoff + 19 + $s * 31).'px; top: '.$ypos.'px'.
                    ';font-size:'.$tta[$ii]->fs.
                    ';background: '.$tta[$ii]->bg.
                    ';color: '.$tta[$ii]->fg.';'.$bor.$weekchange.$lastday.
                    '" sel="'.$ii.'" onclick="change(this, '.($q+$s*2).')"><activity>'.$tta[$ii]->text.'</activity>';
                    echo '</div>';
                }
            }
        }
    }
    fclose($fp);
}
?>
    </div>

    <div id="nicho" style="visibility: hidden">
    <div id="mads" class="box7" style="left: 800px; top: 60px; cursor: pointer;" onclick="mads(this)"></div>
        <div id="g1x11" class="box4"
        style="left: 862px; top: 60px; border: solid black 2px; cursor: pointer; background: gray"
        onclick="emily(this)"><span class="textcentered month">Side 1</span></div>
      <div id="g2x21" class="box4" style="left: 1006px; top: 60px; border: solid black 2px; cursor: pointer;"
        onclick="emily(this)"><span class="textcentered month">Side 2</span></div>
      <div id="g3x31" class="box4" style="left: 1150px; top: 60px; border: solid black 2px; cursor: pointer;"
        onclick="emily(this)"><span class="textcentered month">Side 3</span></div>
<?php
 $arr = array(
    33, 126,
    161, 172,
    8265, 8265,
    8505, 8505,
    8598, 8601,
    8617, 8618,
    9000, 9000,
    8986, 8987,
    9167, 9167,
    9193, 9203,
    9208, 9210,
    9312, 9331,
    9728, 9984,
    9986, 10062,
    10067, 10071,
    10083, 10085,
    10102, 10135,
    10145, 10145,
    10175, 10175,
    10548, 10549,
    11013, 11015,
    11088, 11088,
    11093, 11093,
    128512, 128592,
    57352, 57353,
    119808, 119859,
    119552, 119638,
    119860, 119892,
    119894, 119911,
    119912, 119937,
    119938, 119963,
    120146, 120171,
    120782, 120831,
    127248, 127337,
    127344, 127386,
    127744, 128722,
    128736, 128761,
    129296, 129342,
    129344, 129349,
    129351, 129392,
    129395, 129398,
    129402, 129402,
    129404, 129442,
    129456, 129465,
    129472, 129474,
    129488, 129535
 );
$x1 = 862;
$x = 862;
$y = 100;
$t = 1;
$lc = 0;
$tx = 862;

// emojis
echo '<div id="g1x">';
for ($m = 0; $m < count($arr); $m += 2) {
    for ($n = $arr[$m]; $n < ($arr[$m+1] + 1); $n++) {
        echo '<div class="box7" style="left:'.$x.'px; top:'.$y.'px; fontsize:20px; color:black; visibility:inherit;" onclick="klik(this)"><activity>&#'.$n.';</activity></div>';
        $x += 31;
        if ($x > 1725) {
            $x = $x1;
            $y += 31;
            $lc++;
            if ($lc == 28) {
                $t++;
                echo '</div>';
                echo '<div id="g'.$t.'x" style="visibility: hidden">';
                $tx += 144;
                $y = 100;
                $lc = 0;
            }
        }
    }
}
echo '</div>';

// fonsize
echo '<div id="fss">';
$y = 150;
for ($n = 8; $n < 41; $n += 2) {
    echo '<div class="box7" style="left:800px; top:'.$y.'px; font-size: '.$n.'px; color: black; visibility: inherit;" onclick="rs(this)"><activity>'.$n.'</activity></div>';
    $y += 35;
}
echo '</div>';
?>
     <div id="h1x11" class="box4"
        style="left: 425px; top: 150px; border: solid green 4px; cursor: pointer"
        onclick="alexander(this)"><span class="textcentered month">baggrund</span></div>
      <div id="h2x21" class="box4" style="left: 570px; top: 150px; border: solid black 1px; cursor: pointer;"
        onclick="alexander(this)"><span class="textcentered month">text</span></div>
<?php
// color selector
echo '<div id="heidi">';
$names = array("white", "red", "yellow", "green", "cyan", "pink", "purple", "black", "blue", "brown", "gray", "orange");
$y = 150;
$x1 = 10;
$x = x1;
$tt = 0;
$dd = 25;

for ($r = 0; $r < count($names); $r++) {
  echo '<div class="box8" style="left:'.$x.'px; top:'.$y.'px; background: '.$names[$r].';" onclick="sebastian(this)"></div>';
  $x += $dd;
}


$x = $x1;
$y += 40;
$dc = 256 / 9;
$t = 0;
$y0 = $y;
for ($bb = 0; $bb < 256; $bb += $dc) {
  $y = floor($t / 3) * $dd * 10 + $y0;
  $x0 = ($t % 3) * $dd * 10 + $x1;
  $t++;
  for ($gg = 0; $gg < 256; $gg += $dc) {
    $x = $x0;
    for ($rr = 0; $rr < 256; $rr += $dc) {
      echo '<div class="box8" style="left:'.$x.'px; top:'.$y.'px; background: rgb('.floor($rr).','.floor($gg).','.floor($bb).');" onclick="sebastian(this)"></div>';
      $x += $dd;
    }
    $y += $dd;
  }
}
echo '</div>';
?>
        <div style="position: absolute; left: 780px; top: 44px; width: 100px; height: 14px; font-size: 12px;">
            Resultat</div>
        <div style="position: absolute; left: 780px; top: 135px; width: 100px; height: 14px; font-size: 12px;">
            Størrelse</div>
        <div style="position: absolute; left: 250px; top: 60px; width: 180px; height: 32px; font-size: 18px;"><span
                class="textleft">Skriv tekst her:<br><span style="font-size: 10px">mellemrum giver linieskift</span></span></div>
                <input type="text" id="thomas" oninput="thomas()" onclick="thomas()"
        style="position: absolute; left: 450px; top: 60px; width: 300px; height: 32px; font-size: 18px; border: solid black 1px; cursor: pointer;">
    </div>
    <script>
        var forrigegxx = "g1x11";

   // **Hello** 
   function mads(ella) {
      if (cursel != 0) {
        curselel.style.background = ella.style.background;
        curselel.style.fontSize = ella.style.fontSize;
        curselel.style.color = ella.style.color;
        curselel.innerHTML = ella.innerHTML;
        var n = curselel.getAttribute("key");
        var x = {
          'bg': ella.style.background,
          'fs': ella.style.fontSize,
          'fg': ella.style.color,
          'text': ella.innerText
        };
        selstruct[n] = x;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "/sel?n=" + n + "&ella=" + JSON.stringify(x), true);
        xmlhttp.send();

        var str = '[sel="' + curselel.getAttribute("key") + '"]';
        var x = document.querySelectorAll(str);
        for (var n = 0; n < x.length; n++) {
          var el = x[n];
          el.style.background = curselel.style.background;
          el.style.fontSize = curselel.style.fontSize;
          el.style.color = curselel.style.color;
          el.innerHTML = curselel.innerHTML;
        }
      }
    }

    function emily(ella) {
      var id = ella.id.substr(0, 3);
      if (forrigegxx != id) {
        document.getElementById(forrigegxx).style.background = 'white';
        document.getElementById(forrigegxx.substr(0, 3)).style.visibility = 'hidden';
        document.getElementById(id).style.visibility = '';
        ella.style.background = 'gray';
        forrigegxx = ella.id;
      }
    }

    function select(ella) {
      if (ella != curselel) {
        curselel.style.border = "solid gray 1px";
        ella.style.border = "solid green 4px";
        curselel = ella;
        cursel = Number(ella.getAttribute("key"));
        localStorage.setItem("sel", cursel);
      }
      if (0 != Number(ella.getAttribute("key"))) {
        var el = document.getElementById("mads");
        el.style.background = curselel.style.background;
        el.style.fontSize = curselel.style.fontSize;
        el.style.color = curselel.style.color;
        el.innerHTML = curselel.innerHTML;
        document.getElementById("thomas").value = curselel.innerText;

      }
    }

        function change(ella, rr) {
            if (selstruct[cursel] != null) {
                ella.style.background = curselel.style.background;
                ella.style.fontSize = curselel.style.fontSize;
                ella.style.color = curselel.style.color;
                ella.innerHTML = curselel.innerHTML;
                ella.setAttribute('sel', cursel);
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", "/kagerulle?mel=" + rr + "&sukker=" + cursel, true);
                xmlhttp.send();
            }
        }
<?php
// rendering the selstruct data structure
if (($fp = fopen("sc-data2.dat", "r")) !== false){
    $pp = $_SESSION['user'];
    fseek($fp,$pp*20000);
    $dd = fread($fp,6);
    $tt = fread($fp,intval($dd));
    fclose($fp);
    echo 'selstruct = '.$tt.';';
}
?>


function klik(ella) {
    var el = document.getElementById("mads");
    el.innerHTML = ella.innerHTML;
}

        function klikM() {
            console.log("selstruct=" + JSON.stringify(selstruct) + ";");
        }

        function thomas() {
            document.getElementById("mads").innerHTML = '<activity>' + document.getElementById("thomas").value + '</activity>';
        }

    function rs(ella) {
      document.getElementById("mads").style.fontSize = ella.style.fontSize;
    }

        function md() {
            dragging = true;
            seldowncount = 0;
        }

        function mu() {
            dragging = false;
        }

        function every500ms() {
            if (dragging) {
                seldowncount++;
                if (seldowncount === 3) {
                    dragging = false;
                    if (cw === 'irene') {
                        getnicho();
                    } else {
                        getirene();
                    }
                }
            }
        }

        function getnicho(){
            document.getElementById('irene').style.visibility = 'hidden';
            document.getElementById('nicho').style.visibility = 'visible';
            cw = 'nicho';
        }

        function getirene(){
            document.getElementById('nicho').style.visibility = 'hidden';
            document.getElementById('irene').style.visibility = 'visible';
            cw = 'irene';
        }

    var katharina = false;
    function alexander(ella) {
      katharina = (ella.id == 'h2x21');
      if (katharina) {
        document.getElementById("h1x11").style.border = "solid black 1px";
        document.getElementById("h2x21").style.border = "solid green 4px";
      }
      else {
        document.getElementById("h1x11").style.border = "solid green 4px";
        document.getElementById("h2x21").style.border = "solid black 1px";
      }
    }

function sebastian(ella) {
    if (katharina) {
        document.getElementById("mads").style.color = ella.style.background;
    }
    else {
        document.getElementById("mads").style.background = ella.style.background;
    }
}

        // sæt et usynligt element nederst til højre - laver margin
        var el = document.createElement("div");
        el.className = "box1";
        el.style.left = "1736px";
        el.style.top = "1035px";
        el.style.visibility = "hidden";
        document.body.appendChild(el);

        // til test
        var el = document.createElement("div");
        el.className = "box7";
        el.style.left = "173px";
        el.style.top = "5px";
        el.style.background = '';
        el.style.fontSize = '24px';
        el.style.color = 'black';
        el.innerHTML = '<activity>\&#128512;</activity>';
        el.addEventListener('click', klikM);
        //        document.body.appendChild(el);


        var cw = 'irene';
        var dragging = false;
        var seldowncount = 0;
        var curselel = null;
        var cursel = localStorage.getItem("sel");
        cursel = (cursel != null) ? cursel : 0;
        curselel = document.getElementById('ass'+cursel);
        curselel.style.border = 'solid green 4px';

        window.setInterval(every500ms, 500);
    </script>
</body>

</html>