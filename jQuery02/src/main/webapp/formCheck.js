/**
 * formCheck.js
 */

$(document).ready(function() {
				
	// 시작 시 ID 입력란에 포커스 주기 : 객체.메소드()  / 
	$('#id').focus();
	
	
	// input 텍스트 입력란과 비밀번호 입력란에 포커스 있을 때 색상 변경
	
	
	
	
	
	

	
	// [완료] 버튼 클릭하면 입력 유효성 확인
	$('#newMemberForm').submit(function(){
	
	// ID를 입력하지 않은 경우
	// "아이디를 입력하세요" 경고창 출력되고, 
	// ID 입력란에 포커스
	// 다음 페이지로 전송되지 않도록 처리
	if($('#id').val() == ""){
			alert("아이디를 입력하세요");
			$('#id').focus();   // $(this)도 가능
			return false;
		}
	
	// 비밀번호 입력하지 않은 경우
	// "비밀번호를 입력하세요" 경고창 출력
	// 포커스
	// 다음 페이지로 전송되지 않도록 처리
	if($('#pwd').val() == "") {
			alert("비밀번호를 입력하세요.");
			$('#pwd').focus();  // $(this)도 가능
			return false;
	}

	
	// 라디오 버튼 선택하지 않은 경우
	// "학년을 선택하세요." 출력
	// 다음 페이지로 전송되지 않도록 처리
	//if(!$('input[type="radio"]').is(':checked')){
	//if(!$(':radio').is(':checked')){     // 라디오 버튼 그룹이 하나만 있는 경우 name 없어도 구분됨
	if(!$(':radio[name="year"]').is(':checked')){
		alert("학년을 입력하세요");
			return false;
	}	
	
	// 길이로 확인
	/*if($('input:radio[name="year"]:checked').length == 0){
			alert("학년을 입력하세요");
			return false;
	}*/
	
	
	// 체크박스를 선택하지 않은 경우
	// "관심분야는 1개 이상 선택하세요" 출력
   // 다음 페이지로 전송되지 않도록 처리
	if(!$(':checkbox').is(':checked')){
			alert("관심분야는 1개 이상 선택하세요");
			return false;
	}
	
	
	// 학과 선택하지 않은 경우
	// "학과를 선택하세요" 출력 
	// 다음 페이지로 전송되지 않도록 처리
	if($('#department').val() == "") {  // <select> 태그로 선택
			alert("학과를 선택해 주세요.");
			return false;
    }

	/*if($('option').val() == ""){
			alert("학과를 선택해주세요2");
			return false;
	}*/
	
	}); // submit 종료			
});   // ready 종료









