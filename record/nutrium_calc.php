<?php
    include_once("../db/db_def.php");

    include_once("nutrium_calc_functions.php");

    //データベースへの接続初期化
    $link = mysqli_connect($dbhost, $dbuser, $dbpasswd, $dbname);

    if (!$link) {
        die('接続失敗です。'.mysqli_error());
    }

    mysqli_set_charset($link, "utf8");

    //formからの値の受け取り
    $keyword = $_REQUEST['keyword'];
    $input_recipe_id = $_REQUEST['recipe_id'];
    $nutrium = $_REQUEST['nutrium'];
    if(empty($nutrium)){ $nutrium = 'energy'; }
    $sorting_order = $_REQUEST['nutrium_order'];
    $limit_num = $_REQUEST['limit_num'];
    if(empty($limit_num)){ $limit_num = 5; }

    $results = array();

    $select_sql1 = "SELECT * FROM recipes WHERE ";
    if(!empty($keyword) && empty($input_recipe_id)){
        $select_sql1 .= "title LIKE '%{$keyword}%' limit {$limit_num};";
    }
    elseif(empty($keyword) && !empty($input_recipe_id)){
        $select_sql1 .= "id = '{$input_recipe_id}';";
    }
    else{
        $select_sql1 .= "title LIKE '%カレー%' limit {$limit_num};";
    }

    $result = mysqli_query($link, $select_sql1);

    $target_nutrium_array = array(); //key: $recipe_id, value: $nutirums[$nutrium]  //並び替え対象の栄養素のidをキーとした連想配列
    $t_results = array(); //key: recipe_id, value: array("recipe_id=>$row['id'],title"=>$row['title'], "nutrium"=>$nutriums)
    $results["sorted_list"]=array();

    while ($row = mysqli_fetch_assoc($result)) {
        $recipe_id = $row['id'];
        $t_results[$recipe_id] = array();
        $t_results[$recipe_id]["recipe_id"]=$recipe_id;
        $t_results[$recipe_id]["title"]=$row['title'];

        //個々のレシピの栄養計算
        $nutriums = calc_nutrium($link, $recipe_id);
        $t_results[$recipe_id]["nutriums"] = $nutriums;
        if(array_key_exists($nutrium, $nutriums)){
            $target_nutrium_array[$recipe_id] = $nutriums[$nutrium];   //並び替え対象の栄養素のidをキーとした連想配列に保存
        }
        //var_dump($nutriums);
    }

    //並び替え対象の栄養素のidをキーとした連想配列を指定された順にソート
    if($sorting_order === "ASC"){
        asort($target_nutrium_array);
    }
    else{
        arsort($target_nutrium_array);
    }
    //結果のための連想配列の作成
    $results["sort_nutrium"] = $nutrium;
    $results["sorting_order"] = $sorting_order;
    foreach($target_nutrium_array as $key=>$value){ //指定された栄養素で並び替えた順に結果用配列の結果リストにpush
        //echo "$key\n";
        array_push($results["sorted_list"], $t_results[$key]);
    }

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($results, JSON_UNESCAPED_UNICODE);

    mysqli_close($link);
?>