$(function(){
	//banner轮播
	$('#banner ul.big-banner li').carousel();
	//点击右侧返回按钮返回到顶部
	//滚动返回按钮出现
	var $back = $('#back');
	$(window).scroll(function(){
		var $top = $(window).scrollTop();
		if($top>=70){
			$back.show();
		}else{
			$back.hide();
		}
	});
	//点击按钮返回顶部
	$back.click(function(){
		$('body').animate({
			scrollTop:0//$('#header').offset().top
		},1000);
	});
	//placeholder兼容IE
	$('form').placeholderIe();
	
});

