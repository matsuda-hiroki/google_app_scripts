/*
* slackAPI���Ăяo��channnel�ɒʒm����
*
* @param  string text �ʒm���郁�b�Z�[�W
* @return void 
*/
function callSlackApi(text){
  // TODO 
  // https://api.slack.com/docs/oauth-test-tokens �����Ńg�[�N���擾���Ă��\�[�X�����������Ă�������
  var token = ""
  // ���e��`�����l����
  var channel = "dummy_channel";

  // BOT�̖��O
  var username = "�ΑӘA�����oBOT"; 

  url = encodeURI("https://slack.com/api/chat.postMessage?token=" + token + "&channel=" + channel + "&username=" + username + "&text=" + text);
  UrlFetchApp.fetch(url);
}