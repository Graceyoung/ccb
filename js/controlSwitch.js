/*
*	左右切换内容,next按钮下一个，prev按钮上一个,page-size设置一页有几个li，page-pagescroll 是否按页切换，page-loop到达端点是否切断
*	布局：<div class="main-box">
*			<span class="prev" goto="prev"></span>   控制上一个按钮
*			<span class="next" goto="next"></span>	 控制下一个按钮
*			<div class="move-box"  page-size="1"    page-pagescroll="false" page-loop="false">  内容显示的范围
*									一页有几个li	 是否按页切换			 到达端点是否切断
*				<ul></ul>			通过按钮移动ul的位置，显示不同的内容
*			</div>
*		 </div>
*/
(function(){
	$.fn.controlSwitch = function(){
		this.each(function(){
			var $this = $(this);
			var $mainbox = $this.parents('div.main-box');
			var $box = $('ul',$mainbox);
			var $movebox = $('div.move-box',$mainbox);
			var $size = $movebox.attr('page-size');
			var $liw = $movebox.width()/$size;
			$box.children('li').width($liw+'px');//li的宽度是动态设置的
			var $maxleft = $liw*($box.children().length-1);
			$this.click(function(){
				var leftloop = $movebox.attr('page-pagescroll')=='true'?$movebox.width():$liw;//判断是按页还是个数切换
				var $goto = $this.attr('goto');
				var $gap = $goto=='next'?parseInt('-'+leftloop):leftloop;
				var left = $box.position().left+$gap;
				left = $movebox.attr('page-loop')=='true'?(left>0?-$maxleft:(left<-$maxleft?0:left)):(left>0?0:(left<-$maxleft?-$maxleft:left));//判断到达端点了是否切换到最后一个或者第一个
				$box.animate({left:left+'px'},500);
			});
		});
	}
})(jQuery);