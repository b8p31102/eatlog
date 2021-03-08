<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>栄養素結果</title>
<!-- グラフ描画 -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);
    google.charts.setOnLoadCallback(drawBasic2);

function drawBasic() {
      var data = google.visualization.arrayToDataTable([
        ['栄養素','必要な栄養素数', '現在の栄養素数', '足りない栄養素数'],
        ['カロリー', 50, 10, 35],//数値は例、とりあえず保存されている数値をいれてあげればできそう？って感じ
        ['タンパク質', 40, 20, 10],
        ['脂質', 60, 25, 10],
        ['脂肪酸', 50, 10, 35],
        ['一価飽和脂肪酸', 40, 20, 10],
        ['多価飽和脂肪酸', 60, 25, 10],
        ['コレステロール', 50, 10, 35],
        ['炭水化物', 40, 20, 10],
        ['食物繊維', 60, 25, 10],
        ['ナトリウム', 50, 10, 35],
        ['カリウム', 40, 20, 10],
        ['カルシウム', 60, 25, 10],
        ['マグネシウム', 50, 10, 35],
        ['リン', 40, 20, 10],
        ['鉄', 60, 25, 10],
        ['亜鉛', 50, 10, 35],
        ['銅', 40, 20, 10],
        ['ビタミンA', 60, 25, 10],
        ['ビタミンD', 50, 10, 35],
        ['ビタミンK', 40, 20, 10],
        ['ビタミンD1', 60, 25, 10],
        ['ビタミンD2', 50, 10, 35],
        ['nia', 40, 20, 10],
        ['ビタミンB6', 60, 25, 10],
        ['ビタミンB12', 50, 10, 35],
        ['葉酸', 40, 20, 10],
        ['Pant', 60, 25, 10],
        ['ビタミンC', 50, 10, 35],
        ['塩', 40, 20, 10],
      ]);

      var options = {
        isStacked: true,
        title: '栄養素結果',
        chartArea: {width: '100%'},
        width: 3000,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 100, //最大値の指定
        },
        //凡例の非表示
        legend: { position: "none" },
        animation: { //グラフのアニメーション表示
              duration: 1000,
              easing: 'out', //out:早く→ 遅く
              startup: true
        },
        series: {
          1: {
            targetAxisIndex: 1
          },
          2: {
            targetAxisIndex: 1
          },
        },
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 

</script>
</head>
<body>

   <div id="chart_div"></div>

</body>
</html>