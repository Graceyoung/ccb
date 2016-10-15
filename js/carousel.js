//banner轮播
(function($){
	$.fn.carousel = function(){
		bannerChange();
		var interval = window.setInterval(bannerChange,2000);
		$(this).hover(function(){
			window.clearInterval(interval);
		},function(){
			interval = window.setInterval(bannerChange,2000);
		});
		//鼠标移到小白长条
		$(this).parents('.big-banner').next('.btn').children('li').mouseover(function(){
			index = $(this).index();
			bannerChange();
		});
	}
	var index = 0;
	var $banner = $('#banner ul.big-banner li');
	var $btn = $('#banner ul.btn li');
	var bannerChange = function(){
		$banner.eq(index).show().siblings().stop().hide();;//big-banner变化
		$btn.eq(index).addClass('curr').siblings().removeClass('curr');
		index = ++index%$banner.size();
	}
})(jQuery)