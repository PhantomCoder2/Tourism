<?php

$username="root";
$password="";
$server="localhost";
$db="travel";

$connec=mysqli_connect($server,$username,$password,$db);

if($connec){
    ?>
    <script>
        alert("Connected");
    </script>
    <?php
}else{
    ?>
    <script>
        alert("Error");
    </script>
    <?php
}
?>