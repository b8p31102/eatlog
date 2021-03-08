$(function(){
	$('#search').on("submit",function(event){//formタグ上でのsubmitイベントを処理
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
				// 入力値を初期化
				let nutrium = $('#search [name=nutrium]').val();
				form[0].reset();
				$('#result').empty();
				
				const obj = JSON.parse(result);
				console.log(obj);
				//console.log(obj[2]['name']);
				for(key in obj['sorted_list']) {
					console.log(key);
					console.log(obj['sorted_list'][key]);
					$('#result').append('<li><input type="hidden" name="recipe_id" value="' + obj['sorted_list'][key]['recipe_id'] + '">' + obj['sorted_list'][key]['title'] + " " + obj['sorted_list'][key]['serving_for'] + " " + obj['sorted_list'][key]['nutriums'][nutrium] + '</li>');
					//$('#result').append('')
				}
				
				//$('#debug').text(result);
				
				//$('#result').text(result);//id="result"のあるタグの領域に結果を書き出す
			},
			
			// 通信失敗時の処理
			error: function(xhr, textStatus, error) {
				var err = "送信に失敗しました。\n"+error;
				alert(err);
			}
		});
	});

	$('#record').on("submit",function(event){//formタグ上でのsubmitイベントを処理
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
