/*
* slackAPIを呼び出しchannnelに通知する
*
* @param  string text 通知するメッセージ
* @return void 
*/
function callSlackApi(text){
  // TODO 
  // https://api.slack.com/docs/oauth-test-tokens ここでトークン取得してをソースを書き換えてください
  var token = ""
  // 投稿先チャンネル名
  var channel = "dummy_channel";

  // BOTの名前
  var username = "勤怠連絡抽出BOT"; 

  url = encodeURI("https://slack.com/api/chat.postMessage?token=" + token + "&channel=" + channel + "&username=" + username + "&text=" + text);
  UrlFetchApp.fetch(url);
}