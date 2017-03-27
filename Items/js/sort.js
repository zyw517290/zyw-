$(function(){
//	var timer;
//	//标签转换
//	var oneIndex = 0;
//	$('.zong').hide().eq(0).show();
//	$('.tab-ul li').mouseover(function(){
//				$('.zong').eq($(this).index()).show().siblings('.zong').hide();
//				$('.tab-ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');								
//	})
	var timer;
	$('.main .tab-ul li').hover(function(){		
		var i = $('.main .tab-ul li').index($(this));
		function move(){
			$('.main .tab-ul li').removeClass('active').eq(i).addClass('active');
			$('.main .zong').hide().eq(i).show();
		}
		timer = setTimeout(move,500);
	},function(){
		clearTimeout(timer);
	})
	
	
	
	//全选
	$('.int').click(function(){
		$("input[name='checkbox']").attr('checked',true);
	})
	
	//点击显示隐藏
	$('.log').click(function(){		
		$('.log-ul').slideToggle('slow');
	})
})
