$(function(){
	$('#login').on("submit",function(event){//formタグ上でのsubmitイベントを処理
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
				form[0].reset();
				$('#debug').empty();
				const obj = JSON.parse(result);
				console.log(result);
				console.log(obj);
				if(obj) {
					window.location.href = '../record/recipe.html'; //ログイン成功したときに飛ぶ
				} else {
					$('#result').text("Login Failed!")
				}
				//console.log(obj[2]['name']);
				
				//$('#result').text(html);
				
				//$('#debug').text(result);
			},
			
			// 通信失敗時の処理
			error: function(xhr, textStatus, error) {
				var err = "送信に失敗しました。\n"+error;
				alert(err);
			}
		});
	});
});
