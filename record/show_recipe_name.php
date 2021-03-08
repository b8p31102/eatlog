<?php
    include_once("../db/db_def.php");
include_once("nutrium_calc_functions.php");


    $link = mysqli_connect($dbhost, $dbuser, $dbpasswd, $dbname);
    if (!$link) {
        die('接続失敗です。'.mysqli_error());
    }
    mysqli_set_charset($link, "utf8");

    $recipe_keyword = $_REQUEST['recipe_keyword'];
    $limit_num = $_REQUEST['limit_num'];
    if(empty($limit_num)){ $limit_num = 5; }

    $select_sql1 = "SELECT * FROM recipes WHERE ";
    if(!empty($recipe_keyword)){
        $select_sql1 .= "title LIKE '%{$recipe_keyword}%' limit {$limit_num};";
    }
    else{
        $select_sql1 .= "title LIKE '%カレー%' limit {$limit_num};";
    }

    $result = mysqli_query($link, $select_sql1);
    
    $t_results  = array();

    while($row = mysqli_fetch_assoc($result)) {
        //var_dump($row);
        foreach($row as $key => $value) {
            $t_results[$row['id']][$key] = $value;
        }
    }
    //var_dump($t_results);

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($t_results, JSON_UNESCAPED_UNICODE);

    mysqli_close($link);
?>