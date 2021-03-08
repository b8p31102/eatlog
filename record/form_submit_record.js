$(function(){
	$('#record').on("submit",function(event){//formタグ上でのsubmitイベントを処理
		event.preventDefault(); //formタグの働きによるsubmitを抑制
		var form = $(this);
		// 送信ボタンを取得（後で使う: 二重送信を防止する。）
		var button = form.find('submit_btn');
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
				// 入力値を初期化
				form[0].reset();
				$('#result').empty();
				
				const obj = JSON.parse(result);
				console.log(obj);
				//console.log(obj[2]['name']);
				for(key in obj) {
					console.log(key);
					console.log(obj[key]);
					for(key2 in obj[key]) {
						if(!obj[key][key2]){obj[key][key2] = 0;}
					}
					$('#result').append('<h1><input type="radio" name="record_eiyouka" value="' + key + '">' + obj[key]['name'] +" "+ obj[key]['e_date'] + '</h1>');
                                        $('#result').append('<li>' + "カロリー："+obj[key]['energy'] +"　タンパク質："+ obj[key]['protein'] + "　脂質："+ obj[key]['lipid'] +"　一価不飽和脂肪酸："+ obj[key]['monoSat'] + "多価飽和脂肪酸："+obj[key]['polySat'] +"　コレステロール値："+ obj[key]['chol'] + "　炭水化物："+ obj[key]['carb'] +"　食物繊維："+ obj[key]['fiber'] + "ナトリウム："+obj[key]['na'] + '</li>');
                                        $('#result').append('<li>' + "　カリウム："+ obj[key]['ka'] + "　カルシウム："+ obj[key]['ca'] +"　マグネシウム："+ obj[key]['mg'] + "リン："+obj[key]['p'] +"　鉄分："+ obj[key]['fe'] + "　亜鉛："+ obj[key]['zn'] +"　銅："+ obj[key]['cu'] + "　ビタミンA："+ obj[key]['vit_a'] +"　ビタミンD："+ obj[key]['vit_d'] + '</li>');
                                                                                $('#result').append('<li>' + "　ビタミンK："+ obj[key]['vit_k'] + "　ビタミンB1："+ obj[key]['vit_b1'] +"　ビタミンB2："+ obj[key]['vit_b2'] + "　ナイアシン："+obj[key]['nia'] +"　ビタミンB6："+ obj[key]['vit_b6'] + "　ビタミンB12："+ obj[key]['zn'] +"　葉酸："+ obj[key]['folic'] + "　パントテン酸："+ obj[key]['pant'] +"　ビタミンC："+ obj[key]['vit_c'] + '</li>');

}                                       
				//$('#result').text(result);//id="result"のあるタグの領域に結果を書き出す
			},
			
			// 通信失敗時の処理
			error: function(xhr, textStatus, error) {
				var err = "送信に失敗しました。\n"+error;
				alert(err);
			}
		});
	});
$('#reco').on("submit",function(event){//formタグ上でのsubmitイベントを処理 ID:reco
		event.preventDefault(); //formタグの働きによるsubmitを抑制
		var form = $(this);
		// 送信ボタンを取得（後で使う: 二重送信を防止する。）
		var button = form.find('submit_btn');
		console.log("test");
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
				// 入力値を初期化
				//form[0].reset();
				//$('#result').empty();
				//$('#result').append("記録に成功しました");
				
				$('#debug').text(result);

				//$('#debug').text("記録に成功しました");
				
				//$('#result').text(result);//id="result"のあるタグの領域に結果を書き出す
			},
			
			// 通信失敗時の処理
			error: function (xhr, textStatus, error) {
				var err = "送信に失敗しました。\n" + error;
				alert(err);
			}
		});
	});

});
