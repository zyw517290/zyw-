		
			var timer;
			clearInterval(timer);
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				spaceBetween: 30,
				loop: true
			});
			timer = setInterval("swiper.slideNext()", 2000);
			
			//鼠标移上停止
			$('.swiper-container').mouseover(function(){
				clearInterval(timer);
				$('.swiper-button-next').css({"display":"block"});
				$('.swiper-button-prev').css({"display":"block"});
			})
			//鼠标移出继续
			$('.swiper-container').mouseout(function(){
				timer = setInterval("swiper.slideNext()", 2000);
				$('.swiper-button-next').css({"display":"none"});
				$('.swiper-button-prev').css({"display":"none"});
			})
		
		
	