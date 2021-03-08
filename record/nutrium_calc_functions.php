<?php

    function calc_nutrium($link, $recipe_id){
        $nutrium_array = array();

        if($link){
            $select_sql1 = "SELECT * FROM ingredients WHERE recipe_id = '{$recipe_id}'";
            $result1 = mysqli_query($link, $select_sql1);
            while($ingredient_row = mysqli_fetch_assoc($result1)){
                $name = $ingredient_row['name'];
                $quantity_str = $ingredient_row['quantity'];
                //echo "$name, $quantity_str: \n";

                //数量を変換
                $quantity_rate = 1.0;
                $quantity_rate = calc_quantity($link, $name, $quantity_str);

                if($quantity_rate > 0.0){
                    //栄養価を取得して計算
                    $select_sql2 = "SELECT * FROM eiyouka WHERE name LIKE '%{$name}%'";
                    $result2 = mysqli_query($link, $select_sql2);
                    while($nutrium_row = mysqli_fetch_assoc($result2)){
                        foreach($nutrium_row as $col_name=>$value){
                            if($col_name != 'recipe_id' && $col_name != 'name' && $col_name != 'id'){
                                //echo "$col_name, $value, $quantity_rate\n";
                                if(!array_key_exists($col_name,$nutrium_array)){ $nutrium_array[$col_name] = 0; }
                                $nutrium_array[$col_name] += $value * $quantity_rate;
                            }
                        }
                    }
                }
            }
        }

        return $nutrium_array;
    }

    function show_recipe_name($recipe_id){
        $title = "カレー";
        if($link){
            $select_sql1 = "SELECT * FROM recipes WHERE id ='{$recipe_id}' limit 1;";
            $result1 = mysqli_query($link, $select_sql1);
            while($recipe_row = mysqli_fetch_assoc($result1)){
                $title = $recipe_row['title'];
                var_dump($recipe_row);
            }
        }

        return $title;
    }

    function calc_quantity($link, $name, $quantity){
        $rate = 1.0;

        $kishu_array = ['㎜', '㎝', '㎞', '㎎', '㎏', '㏄',
            '㍉', '㌔', '㌢', '㍍', '㌘','㍑',
            '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯',
            '⑰', '⑱', '⑲', '⑳', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'
        ];
    
        $replace_kishu_array = [ 'mm', 'cm', 'km', 'mg', 'kg', 'cc',
             'ミリ', 'キロ', 'センチ', 'メートル', 'グラム', 'リットル', 
            '(1)', '(2)', '(3)', '(4)', '(5)', '(6)', '(7)', '(8)', '(9)','(10)', '(11)', '(12)', '(13)',
            '(14)', '(15)', '(16)', '(17)', '(18)', '(19)', '(20)', '(1)', '(2)', '(3)', '(4)', '(5)'
        ];
    
        $kansuji = ['半分','一','二','三','四','五','六','七','八','九'];
        $kansuji_num =['0.5','1','2','3','4','5','6','7','8','9'];
     
        $line = $quantity; //分量の表記から数値を取り出す
        $line = mb_convert_kana($line,"nasKV"); //全角記号・英数字を半角に変換
        $line = trim($line);//文頭のスペースを削除
        $line = mb_strtolower($line);//半角英文字をすべて小文字に統一
        $line = str_replace( $kishu_array, $replace_kishu_array, $line );//機種依存の組文字を書き換え
        $line = str_replace( $kansuji, $kansuji_num, $line );//漢数字を数字に書き換え
        $line = str_replace( '十', '0', $line );
        $line = str_replace( '百', '00', $line );
        $line = str_replace( ' ', '', $line );
        $line = str_replace( '\n', '', $line );
        $line = str_replace( '\t', '', $line );
        $line = str_replace( '\0', '', $line );
        $line = str_replace( 'cup', 'カップ', $line );
        $line = str_replace( 'cap', 'カップ', $line ); //綴り違いだが「カップ」と思われるので
        $line = str_replace( 'カッブ', 'カップ', $line );
        $line = str_replace( 'カツプ', 'カップ', $line );
        $line = str_replace( 'cut', 'カット', $line );
        $line = str_replace( 'ぐらむ', 'g', $line );
        $line = str_replace( 'ひき', '匹', $line );
        $line = str_replace( 'まい', '枚', $line );
        $line = str_replace( 'マイ', '枚', $line );
        $line = str_replace( 'びん', '瓶', $line );
        $line = str_replace( 'ビン', '瓶', $line );
        $line = str_replace( 'ボン', '本', $line );
        $line = str_replace( 'ホン', '本', $line );
        $line = str_replace( 'ポン', '本', $line );
        $line = str_replace( 'ごう', '合', $line );
        $line = str_replace( 'カブ', '株', $line );
        $line = str_replace( 'サジ', 'さじ', $line );
    
        //余分な行や解釈をしないようにする
        if(preg_match("/id/",$line,$matches)){
            //echo "$line\n";
        }
        elseif(preg_match("/\((\d+)(×|x)(\d+)(.*)\)/",$line,$matches)){
            //echo "$line -> ";
            $line = preg_replace("/\((\d+)(×|x)(\d+)(.*)\)/",'',$line);
            //echo "$line\n";
        }
        elseif(preg_match("/(\d+)分の(\d+)(.*)\)/",$line,$matches)){
            $line = $matches[1].'/'.$matches[2].$matches[3];
        }
        else{}
            
        //分量表現から数値(q_num)と単位(unit)を取得
        $q_num = 0;
        $q_num_min = 0;
        $q_num_max = 0;
        $unit = "";
        if(preg_match_all("/(\d+\.\d+|\d+)(~|～|-)(\d+)(.*?)(kg|mg|g|ml|cc|dl|l|cm|c|mm|キロ|キログラム|グラム|ミリグラム|ミリリットル|リットル|リッター|センチ|センチメートル|ミリメートル)/",$line,$matches)){
            $q_num_min = $matches[1][0];
            $q_num_max = $matches[3][0];
            $q_num = ($q_num_min + $q_num_max) / 2;
            $unit = $matches[4][0];
            //echo "$line: $q_num_min, $q_num_max, $q_num $unit\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)(.*?)(kg|mg|g|ml|cc|dl|l|cm|mm|c|キロ|キログラム|グラム|ミリグラム|ミリリットル|リットル|リッター|センチ|センチメートル|ミリメートル)/",$line,$matches)){
            $q_num = $matches[1][0];
            $unit = $matches[2][0];
            //echo "$line: $q_num $unit\n";
        }
        elseif(preg_match_all("/(大さじ|大匙|おおさじ|小さじ|小匙|こさじ|teaspoon|ティースプーン|大スプーン|テーブルスプーン)(\d+\.\d+|\d+)(~|～|-)(\d+\.\d+|\d+)/",$line,$matches)){
            $q_num_min = $matches[2][0];
            $q_num_max = $matches[4][0];
            $q_num = ($q_num_min + $q_num_max) /2;
            $unit = $matches[1][0];
            //echo "$line: $q_num_min, $q_num_max, $unit $q_num\n";
        }
        elseif(preg_match_all("/(大さじ|大匙|おおさじ|tbsp|tbsps|小さじ|小匙|こさじ|teaspoon|tsp|tsps|ティースプーン|大スプーン|テーブルスプーン)(.*?)(\d+\.\d+|\d+)\/(\d+\.\d+|\d+)/",$line,$matches)){
            $q_num = $matches[3][0]/$matches[4][0];
            $unit = $matches[1][0];
            //echo "$line: $unit $q_num\n";
        }
        elseif(preg_match_all("/(大さじ|大匙|おおさじ|tbsp|tbsps|小さじ|小匙|こさじ|teaspoon|tsp|tsps|ティースプーン|大スプーン|テーブルスプーン)(\d+\.\d+|\d+)/",$line,$matches)){
            $q_num = $matches[2][0];
            $unit = $matches[1][0];
            //echo "$line: $unit $q_num\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)(~|～|-)(\d+\.\d+|\d+)(.*?)(大さじ|大匙|おおさじ|tbsp|tbsps|小さじ|小匙|こさじ|teaspoon|tsp|tsps|ティースプーン|大スプーン|テーブルスプーン)/",$line,$matches)){
            $q_num_min = $matches[1][0];
            $q_num_min = $matches[3][0];
            $q_num = ($q_num_min + $q_num_max) /2;
            $unit = $matches[5][0];
            //echo "$line: $q_num_min, $q_num_max, $unit $q_num\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)\/(\d+\.\d+|\d+)(.*?)(大さじ|大匙|おおさじ|tbsp|tbsps|小さじ|小匙|こさじ|teaspoon|tsp|tsps|ティースプーン|大スプーン|テーブルスプーン)/",$line,$matches)){
            $q_num = $matches[1][0]/$matches[2][0];
            $unit = $matches[4][0];
            //echo "$line: $unit $q_num\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)(.*?)(大さじ|大匙|おおさじ|小さじ|小匙|こさじ|teaspoon|ティースプーン|大スプーン|テーブルスプーン)/",$line,$matches)){
            $q_num = $matches[1][0];
            $unit = $matches[3][0];
            //echo "$line: $unit $q_num\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)(~|～|、|-)(\d+\.\d+|\d+)(個|つ|房|ふさ|カップ|欠|片|かけ|カケ|本|枚|束|膳|こ|コ|丁|玉|尾|粒|斤|帖|把|わ|握|節|切れ|切|株|缶|パック|杯|匹|ケ|ヶ|枚|瓶|包|枝|掴|合|升|箱|腹|滴|振り|掴み|つかみ)/",$line,$matches)){
            $q_num_min = $matches[1][0];
            $q_num_max = $matches[3][0];
            $q_num = ($q_num_min + $q_num_max) / 2;
            $unit = $matches[4][0];
            //echo "$line: $q_num_min, $q_num_max, $q_num $unit\n";
        }
        elseif(preg_match_all("/(\d+)\/(\d+)(個|つ|房|ふさ|カップ|欠|片|かけ|カケ|本|枚|束|袋|合|膳|こ|コ|丁|玉|尾|粒|斤|帖|把|わ|握|節|切れ|切|株|缶|パック|杯|匹|ケ|ヶ|枚|瓶|包|枝|掴|合|升|箱|腹|滴|振り|掴み|つかみ)/",$line,$matches)){
            $q_num = $matches[1][0] / $matches[2][0];
            $unit = $matches[3][0];
            //echo "$line: $q_num $unit\n";
        }
        elseif(preg_match_all("/(\d+\.\d+|\d+)(個|つ|房|ふさ|カップ|欠|片|かけ|カケ|本|枚|束|袋|合|膳|こ|コ|丁|玉|尾|粒|斤|帖|把|わ|握|節|切れ|切|株|缶|パック|杯|匹|ケ|ヶ|枚|瓶|包|枝|掴|合|升|箱|腹|滴|振り|掴み|つかみ)/",$line,$matches)){
            $q_num = $matches[1][0];
            $unit = $matches[2][0];
            //echo "$line: $q_num $unit\n";
        }
        elseif(preg_match("/(適量|お好み|少々)(.*)/",$line,$matches)){
            $q_num = 1;
            $unit = $matches[1];
            //echo "$q_num $unit\n";
        }
        else{
            //echo "FAIL: $line\n";
        }

        //echo "$line: $q_num_min, $q_num_max, $q_num $unit\n";

        //得られた数値と単位から基本のグラム重量(g)を取得
        $base_gram=0.0;
        if(preg_match("/(適量|お好み|少々)/",$unit,$matches)){
            $base_gram = 2.0;
        }
        elseif(preg_match("/(大さじ|大匙|おおさじ|大スプーン|テーブルスプーン|tbsp|tbsps)/",$unit,$matches)){
            $base_gram = 15.0; //水やドレッシング（その他は「計量スプーン・計量カップによる重量表」から材料毎の単位当たりの重さをhenkanに入れること）
        }
        elseif(preg_match("/(小さじ|小匙|こさじ|teaspoon|tsp|tsps|ティースプーン)/",$unit,$matches)){
            $base_gram = 5.0; //水やドレッシング（その他は「計量スプーン・計量カップによる重量表」から材料毎の単位当たりの重さをhenkanに入れること）
        }
        elseif(preg_match("/(g|グラム|cc|ml|ミリリットル)/",$unit,$matches)){
            $base_gram = 1.0; //本来は，液体については，材料毎に単位(unit)当たりの重さをhenkanに登録する
        }
        elseif(preg_match("/(dl|デシリットル)/",$unit,$matches)){
            $base_gram = 10.0; //本来は，液体については，材料毎に単位(unit)当たりの重さをhenkanに登録する
        }
        elseif(preg_match("/(kg|キログラム|キロ|l|リットル|リッター)/",$unit,$matches)){
            $base_gram = 1000.0; //本来は，液体については，材料毎に単位(unit)当たりの重さをhenkanに登録する
        }
        else{ //その他は，henkanから材料毎の単位(unit)あたりの重さ(gram)の値を取得
            //echo "$line: $q_num_min, $q_num_max, $q_num $unit\n";
            $base_gram = 0.0;
            $select_sql1 = "SELECT * FROM henkan WHERE name LIKE '%{$name}%'";
            //echo "$select_sql1\n";
            $result1 = mysqli_query($link, $select_sql1);
            while($row = mysqli_fetch_assoc($result1)){
                $base_gram = $row['gram'];
            }
        }
        $rate = ($q_num * $base_gram)/100;
        //echo "rate = $rate\n";

        return $rate;
    }
    
?>