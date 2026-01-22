/**
 * subMenu.js
 */

//클릭 시 서브메뉴 나타나게, 한번 더 클릭시 안 보이게

$(function(){
	//처음에 전체보기 클릭시 모든 메뉴 항목 보이게 처리
	$('#showAllMenu').on('click',function(){
		if($(this).text()=='전체보기 ▼'){
			$('#subMenuBox').css('visibility','visible');
			$(this).text('메뉴닫기 ▲').css('color','blue');
		}else{
			$('#subMenuBox').css('visibility','hidden');
			$(this).text('전체보기 ▼').css('color','black');
		}
	});//click 끝
});//ready 끝






