/*
* 自定义滚动条
*	对应的布局
*	<div class="self-scroll">
*		<ul class="scroll_box"></ul>
*		<div class="scroll"></div>//滚动条
*	</div>
*/
(function($){
	$.fn.selfScroll = function(){
		$(this).each(function(){
			var $this = $(this);
			var $selfscroll = $this.parent();
			var $ul = $('.scroll_box',$selfscroll);
			var uh = $ul.height();
			var ch = $selfscroll.height();
			var sh = ch/(uh/ch);
			if(sh>=ch||uh==0){
				$this.hide();
			}else{
				$this.show();
			}
			$this.height(sh+'px');
			var maxtop = $this.parents('div.self-scroll').height() - $this.height();//最大的top值
			var num = (uh-ch)/maxtop;//ul的最大top值是滚动条的最大top值的多少倍
			//拖拽滚动
			$this.mousedown(function(event){
				var event = event||window.event;
				var prevtop = event.clientY;
				var ctop = $this.position().top;//鼠标点击的时候的top
				$(document).bind('mousemove',function(e){
					var e = e||window.event;
					var y = e.clientY;
					var top = y - prevtop+ctop;
					top = top<0?0:(top>maxtop?maxtop:top);//top的范围判断
					$this.css({top:top+'px'});
					var utop = top==0?0:(top*num);//ul的top值
					$this.siblings('.scroll_box').css({top:'-'+utop+'px'});//ul跟着滚动条跑
					return false;//阻止事件冒泡
				}).mouseup(function(){
					$(this).unbind('mousemove')
				});
				return false;
			});

			//滚动鼠标 滚动
				//非火狐的滚轮事件 mousewheel
			$selfscroll.bind('mousewheel',function(event){
				var event = event||window.event;
				var dir = event.originalEvent.wheelDelta;
				dir = dir>0?1:0;//>0向上滚，<0向下滚
				move(dir);
				return false;//阻止冒泡
			});
				//火狐浏览器的滚轮事件 DOMMouseScroll
			$selfscroll.bind("DOMMouseScroll", function (event) {
				var dir = event.originalEvent.detail;
				dir = dir<0?1:0;//>0向下滚，<0向上滚
				move(dir);
				event.preventDefault();//阻止冒泡
			});
			var move = function(dir){
				var addgap = dir?-3:3;
				var addthree = $this.position().top+addgap;
				var ultop = (addthree)<0?0:(addthree>maxtop?maxtop:addthree);
				$this.css('top',ultop);
				var uTop = ultop==0?0:num*ultop;
				$ul.css('top',-uTop);
			}
		});
	}
})(jQuery);