/**
 * 
 */

$(function(){
	let $tabContent =$('#tabContent div');
	
	//tab 컨텐츠는 첫 번 째 이미지를 먼저 보여주므로 tabMenu도 첫번째 반환
	('#tabMenu li:first-child').addClass('selectedItem');
	
	//tabmenu 각 li click이벤트 연결
	('#tabMenu li').on('click',function(){
		let index = $(this).index();//현재 참조하는 객체의 idx 반환
		
		//모든 탭 메뉴 li에 대해 적용되었던 selected Item 클래스 제거
		('#tabMenu li').removeClass('selected Item');
		
		//click한 li에 대해서 addClass
		(this).addClass('selected Item');
		
		//선택한 메뉴에 대한 관련 컨텐츠 표현(img 표현)
		$tabContent.css('display','none');
		
		//클릭한 탭 메뉴에 해당하는 div:img만 보이게 함
		$tabContent.eq(index).css('display','block');
	});//on끝
	
})//ready 끝










