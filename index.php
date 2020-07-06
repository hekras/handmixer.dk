<?php
     session_start();
     if( !isset( $_SESSION['user'] ) ) {
          if ($_GET['path']=='try' ){
               $_SESSION['user'] = 0;
          }
          elseif ($_GET['path']=='try2020' ){
               $_SESSION['user'] = 0;
          }
          elseif ($_GET['path']=='registrer' ){
               include 'registrer.php';
          }
          elseif ($_GET['path']=='addnew' ){
               include 'addnew.php';
          }
          elseif ($_GET['path']=='login' ){
               include 'login.php';
               if( !isset( $_SESSION['user'] ) ) {
//                    include 'loginform.php';
                    include 'jsdemopage.html';
               }
          }
          else{
//                    include 'loginform.php';
                    include 'jsdemopage.html';
          }
     }
     if( isset( $_SESSION['user'] ) ) {
          if ($_GET['path']=='try' ){
               include 'sc-server.php';
          }
          elseif ($_GET['path']=='try2020' ){
               include 'sc-server-2020.php';
          }
          elseif ($_GET['path']=='sel' ){
               include 'sel.php';
          }
          elseif ($_GET['path']=='kagerulle' ){
               include 'kagerulle.php';
          }
          elseif ($_GET['path']=='kagerulle2020' ){
               include 'kagerulle-2020.php';
          }
          elseif ($_GET['path']=='logout' ){
               session_unset();
               session_destroy();
//                    include 'loginform.php';
                    include 'jsdemopage.html';
          }
          else{
               include 'jsdemopage.html';
//               include 'sc-server.php';
          }
     }

