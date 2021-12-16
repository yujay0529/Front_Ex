/**
 * chatbot.js
 */

$(document).ready(function() {
	// 챗봇에게 질문하고 응답받기
	// message 입력하고 전송 버튼 눌렀을 때
	$('#chatForm').on('submit', function(){
		event.preventDefault();
		// message 입력하고 [전송] 버튼 누르면 (엔터쳐도 됨)
		// chatBox에 보낸 메시지 추가
		if($('#message').val() != ""){
			$('#chatBox').append('<div class="msgBox send"><span>' + 
												$('#message').val() + '</span></div><br>');
		}
		
	});




});   // ready 종료