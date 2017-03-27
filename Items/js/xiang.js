$(function(){
	var oneIndex = 0;
	$('.message-left-top').hide().eq(0).show();
	$('.oul li').click(function(){
		$('.message-left-top').eq($(this).index()).show().siblings('.message-left-top').hide();
		$('.oul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
	
	
	
	
	//下拉菜单
	$('.select-sp').click(function(){
		$('.select-ul').slideToggle('slow');
	})
	
	
	//下拉菜单点击菜单更换数据
	$('.select-ul li').click(function(){
		var selectVal = $(this).html();
		$('.int').val(selectVal);		
	})
	

})
