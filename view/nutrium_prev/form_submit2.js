$(function(){
  $('#calc').on("submit",function(event){//formタグ上でのsubmitイベントを処理
		event.preventDefault(); //formタグの働きによるsubmitを抑制
		var form = $(this);
		// 送信ボタンを取得（後で使う: 二重送信を防止する。）
		var button = form.find('submit_btn');
		//console.log("test");
    $.ajax({
			url: form.attr('action'), //<form>タグのaction属性の値を利用する
			type: form.attr('method'), //<form>タグのmethod属性の値を利用する
			data: form.serialize(), //formタグの中身を送信可能なオブジェクトに変換
			timeout: 100000, //送信時に失敗まで待つタイムアウトまでの時間(ミリ秒)
			dataType: 'text', //送受信するデータのタイプ
			// 送信前
			beforeSend: function(xhr, settings) {
				// ボタンを無効化し、二重送信を防止
				button.attr('disabled', true);
			},
			// 応答後
			complete: function(xhr, textStatus) {
				// ボタンを有効化し、再送信を許可
				button.attr('disabled', false);
			},
						
			// 通信成功時の処理
		success: function(result, textStatus, xhr) {
      $('#result').empty();
      const obj = JSON.parse(result);
      if(obj['sex'] == 'F' || obj['sex'] == 'M'){
			console.log(result);
			console.log(obj);

var sex = obj['sex'];
console.log(sex);
if(sex == 'M'){
var ene = 2650;
var pro = 65; 
var lip = ene*25/100;
var Polysat = 20;
var Monosat = 40;
var car = ene*60/100;
var fib = 21;
var Na = 7.5;
var Ka = 2500;
var Ca = 800;
var Mg = 340;
var P = 1000;
var Fe = 7.5;
var Zn = 11;
var Cu = 0.9;
var via = 850;
var vid = 8.5;
var vik = 150;
var vitb1 = 1.4;
var vitb2 = 1.6;
var ni = 15;
var vitb6 = 1.4;
var vitb12 = 2.4;
var fol = 240;
var Pant = 5;
var vic = 100;
}else{
var ene = 2000;
var pro = 50; 
var lip = ene%25;
var Polysat = 7;
var Monosat = 21.6;
var car = ene%60;
var fib = 18;
var Na = 6.5;
var Ka = 2000;
var Ca = 650;
var Mg = 270;
var P = 800;
var Fe = 6.5;
var Zn = 8;
var Cu = 0.7;
var via = 650;
var vid = 8.5;
var vik = 150;
var vitb1 = 1.1;
var vitb2 = 2.4;
var ni = 11;
var vitb6 = 1.1;
var vitb12 = 2.4;
var fol = 240;
var Pant = 5;
var vic = 100;
}
// SCRIPTタグの生成
var el = document.createElement("script");
 console.log(lip);
 console.log(car);

// SCRIPTタグのSRC属性に読み込みたいファイルを指定
el.src = "https://www.gstatic.com/charts/loader.js";
 
// BODY要素の最後に追加
document.body.appendChild(el);
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);
    google.charts.setOnLoadCallback(drawBasic2);
    google.charts.setOnLoadCallback(drawBasic3);
    google.charts.setOnLoadCallback(drawBasic4);
    google.charts.setOnLoadCallback(drawBasic5);
    google.charts.setOnLoadCallback(drawBasic6);
    google.charts.setOnLoadCallback(drawBasic7);
    google.charts.setOnLoadCallback(drawBasic8);
    google.charts.setOnLoadCallback(drawBasic9);
    google.charts.setOnLoadCallback(drawBasic10);
    google.charts.setOnLoadCallback(drawBasic11);
    google.charts.setOnLoadCallback(drawBasic12);
    google.charts.setOnLoadCallback(drawBasic13);
    google.charts.setOnLoadCallback(drawBasic14);
    google.charts.setOnLoadCallback(drawBasic15);
    google.charts.setOnLoadCallback(drawBasic16);
    google.charts.setOnLoadCallback(drawBasic17);
    google.charts.setOnLoadCallback(drawBasic18);
    google.charts.setOnLoadCallback(drawBasic19);
    google.charts.setOnLoadCallback(drawBasic20);
    google.charts.setOnLoadCallback(drawBasic21);
    google.charts.setOnLoadCallback(drawBasic22);
    google.charts.setOnLoadCallback(drawBasic23);
    google.charts.setOnLoadCallback(drawBasic24);
    google.charts.setOnLoadCallback(drawBasic25);
    google.charts.setOnLoadCallback(drawBasic26);
console.log(sex);
function drawBasic() {
var energy_null = obj['energy']
if(!energy_null){
var energy_null = 0 
}

      var data = google.visualization.arrayToDataTable([
        ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['カロリー',ene,ene-energy_null,energy_null,],
      ]);
var ene1 = ene-obj['energy'];
console.log(ene);
console.log(obj['energy']);
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'calです'
}else{
var message = '栄養素足りてます'
}
      var options = {
        isStacked: true,
        title: message,

        chartArea: {width: '100%'},
        width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: obj['energy'],
          maxValue: 2650, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result2'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 

function drawBasic2() {
var protein_null = obj['protein']
if(!protein_null){
var protein_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['タンパク質',pro,pro-protein_null,protein_null,],
      ]);
var ene1 = pro-obj['protein'];
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result3'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic3() {
var monosat_null = obj['monoSat']
if(!monosat_null){
var monosat_null = 0 
}
      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],


        ['一価不飽和脂肪酸',Monosat,Monosat-monosat_null,monosat_null,],
      ]);

var ene1 = Monosat-monosat_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}
      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 60, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result4'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic4() {
var polySat_null = obj['polySat']
if(!polySat_null){
var polySat_null = 0 
}
      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['多価飽和脂肪酸',Polysat,Polysat-polySat_null,polySat_null,],
      ]);
var ene1 = Polysat-polySat_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result5'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic5() {
var fiber_null = obj['fiber']
if(!fiber_null){
var fiber_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['食物繊維',fib,fib-fiber_null,fiber_null,],
      ]);
var ene1 = fib-fiber_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result6'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic6() {
var ka_null = obj['ka']
if(!ka_null){
var ka_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['カリウム',Ka,Ka-ka_null,ka_null,],
      ]);
var ene1 = Ka-ka_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title:message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 2500, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result7'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic7() {
var ca_null = obj['ca']
if(!ca_null){
var ca_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['カルシウム',Ca,Ca-ca_null,ca_null,],
      ]);
var ene1 = Ca-ca_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 800, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result8'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic8() {
var mg_null = obj['mg']
if(!mg_null){
var mg_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['マグネシウム',Mg,Mg-mg_null,mg_null,],
      ]);
var ene1 = Mg-mg_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result9'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic9() {
var p_null = obj['p']
if(!p_null){
var p_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['リン',P,P-p_null,p_null,],
      ]);
var ene1 = P-p_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title:message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 1000, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result10'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic10() {
var zn_null = obj['zn']
if(!zn_null){
var zn_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['亜鉛',Zn,Zn-zn_null,zn_null,],
      ]);
var ene1 = Zn-zn_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result11'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 

function drawBasic11() {
var vita_null = obj['vit_a']
if(!vita_null){
var vita_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
       ['ビタミンA',via,via-vita_null,vita_null,],
      ]);
var ene1 = via-vita_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'μgRAEです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result12'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 

function drawBasic12() {
var vitd_null = obj['vit_d']
if(!vitd_null){
var vitd_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ビタミンD',vid,vid-vitd_null,vitd_null,],
      ]);
var ene1 = vid-vitd_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'μgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result13'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic13() {
var vitk_null = obj['vit_k']
if(!vitk_null){
var vitk_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ビタミンK',vik,vik-vitk_null,vitk_null,],
      ]);
var ene1 = vik-vitk_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'μgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result14'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic14() {
var vitb1_null = obj['vit_b1']
if(!vitb1_null){
var vitb1_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ビタミンB1',vitb1,vitb1-vitb1_null,vitb1_null,],
      ]);
var ene1 = vitb1-vitb1_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result15'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic15() {
var vitb2_null = obj['vit_b2']
if(!vitb2_null){
var vitb2_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
         ['ビタミンB2',vitb2,vitb2-vitb2_null,vitb2_null,],
      ]);
var ene1 = vitb2-vitb2_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result16'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic16() {
var nia_null = obj['nia']
if(!nia_null){
var nia_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ナイアシン',ni,ni-nia_null,nia_null,],
      ]);
var ene1 = ni-nia_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgNEです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result17'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic17() {
var vitb6_null = obj['vit_b6']
if(!vitb6_null){
var vitb6_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ビタミンB6',vitb6,vitb6-vitb6_null,vitb6_null,],
      ]);
var ene1 = vitb6-vitb6_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result18'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic18() {
var vitb12_null = obj['vit_b12']
if(!vitb12_null){
var vitb12_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素','摂取栄養素数'],
        ['ビタミンB12',vitb12,vitb12-vitb12_null,vitb12_null,],
      ]);
var ene1 = vitb12-vitb12_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'μg足りていません'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result19'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic19() {
var folic_null = obj['folic']
if(!folic_null){
var folic_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['葉酸',fol,fol-obj['folic'],obj['folic'],],
      ]);
var ene1 = fol-folic_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'μg足りていません'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result20'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic20() {
var pant_null = obj['pant']
if(!pant_null){
var pant_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['パントテン酸',Pant,Pant-pant_null,pant_null,],
      ]);
var ene1 = Pant-pant_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mg足りていません'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result21'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic21() {
var vic_null = obj['vit_c']
if(!vic_null){
var vic_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない栄養素数','摂取栄養素数'],
        ['ビタミンC',vic,vic-obj['vit_c'],obj['vit_c'],],
      ]);
var ene1 = vic-vic_null;
console.log(ene1);
if (ene1 > 0){
var message = 'あと'+ene1+'mg足りていません'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result22'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 
function drawBasic22() {
var lipid_null = obj['lipid']
if(!lipid_null){
var lipid_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','以下が理想','残り基準摂取量','摂取栄養素数'],
        ['脂質',lip,lip-lipid_null,lipid_null,],
      ]);
var ene1 = lip-lipid_null;
console.log(ene1);
if (ene1 > 0){
var message = '残り基準摂取量'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 25, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result26'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 


function drawBasic23() {
var carb_null = obj['carb']
if(!carb_null){
var carb_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','以下が理想','残り基準摂取量','栄養素数'],
        ['炭水化物',car,car-carb_null,carb_null,],
      ]);
var ene1 = car-carb_null;
console.log(ene1);
if (ene1 > 0){
var message = '残り基準摂取量'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result24'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 


function drawBasic24() {
var na_null = obj['na']
if(!na_null){
var na_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','以下が理想','残り基準摂取量','栄養素数'],
        ['ナトリウム',Na,Na-na_null,na_null,],
      ]);
var ene1 = Na-na_null;
console.log(ene1);
if (ene1 > 0){
var message = '残り基準摂取量'+ene1+'gです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result25'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 



function drawBasic25() {
var fe_null = obj['fe']
if(!fe_null){
var fe_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','目安','足りない摂取','栄養素数'],
        ['鉄',Fe,Fe-fe_null,fe_null,],
      ]);
var ene1 = Fe-fe_null;
console.log(ene1);
if (ene1 > 0){
var message = '残り基準摂取量'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 65, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result23'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 


function drawBasic26() {
var cu_null = obj['cu']
if(!cu_null){
var cu_null = 0 
}

      var data = google.visualization.arrayToDataTable([
         ['栄養素','以下が理想','残り基準摂取量','栄養素数'],
        ['銅',Cu,Cu-cu_null,cu_null,],
      ]);
var ene1 = Cu-cu_null;
console.log(ene1);
if (ene1 > 0){
var message = '残り基準摂取量'+ene1+'mgです'
}else{
var message = '栄養素足りてます'
}

      var options = {
        isStacked: true,
        title: message,
        chartArea: {width: '100%'},
       width: 300,
        height: 500,
        colors: ['#33FFFF','#ffc0cb','#ff1493'],
        hAxis: {
          minValue: 0,
          maxValue: 11, //最大値の指定
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

      var chart = new google.charts.Bar(document.getElementById('result27'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    } 

			//$('#debug').text(result);
			
			//$('#result').text(result);//id="result"のあるタグの領域に結果を書き出す
    } else {
      $('#result').text('記録が存在しません');
    }
  },
		// 通信失敗時の処理
		error: function(xhr, textStatus, error) {
			var err = "送信に失敗しました。\n"+error;
			alert(err);
		}
  });
});
});
