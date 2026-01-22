/**
 * 
 */

$(function(){
	//scroll 이벤트
	$(window).on('scroll',function(){
		//스크롤 되는 문서의 스크롤 탑이 헤더박스의 높이 이상이면 
		//메인메뉴 고정 그림자 표시
		if($(document).scrollTop() >= $('headerBox').height())
			$('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
		else
			$('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
		
	});//scroll on 끝
	//moveToTop 이미지 클릭 시 top 이동
	$('#moveToTop').on('click',function(){
		$('html,body').animate({scrolllTop:0}, 500);
	});
});//ready 끝






















