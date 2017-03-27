$(function(){		
		$('.btnClick').click(function(){			
			$('h2').remove();//
			$('li').remove();
			var sel = $('.int').val();
			var numList;
			$.ajax({
				type:"get",
				url:"http://wthrcdn.etouch.cn/weather_mini?city="+sel,
				async:true,
				dataType:'jsonp',
				success:function(date){
//					console.log(date);
				numList = date.data;
				var str = "<h2>"+numList.ganmao+"</h2>";
				$('.ul1').before(str);
				$.each(numList.forecast, function(i,j) {
					var ul1 = "<li>"+j.date+"</li>";
					$('.ul1').append(ul1);
					var ul2 = "<li>"+j.fengxiang+"</li>";
					$('.ul2').append(ul2);
					var ul3 = "<li>"+j.fengli+"</li>";
					$('.ul3').append(ul3);
					var ul4 = "<li>"+j.high+"</li>";
					$('.ul4').append(ul4);
					var ul5 = "<li>"+j.type+"</li>";
					$('.ul5').append(ul5);
					var ul6 = "<li>"+j.low+"</li>";
					$('.ul6').append(ul6);
				});
			}
		});
	})
	
	
	
	
	//点击文本框显示
//	$('.int').click(function(){
//		if($('.sheet').css('display') == 'none')
//		{
//			$('.sheet').show();
//		}
//		else{
//			$('.sheet').hide();
//		}
//	})
})
