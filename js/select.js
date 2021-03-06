/*
*	select选择框，一种单一的，一种复杂的
*	单一的布局：点击input，下拉框ul显示，并把选中的内容显示在input中
*				<div class="select">
*					<input />
*					<ul class="alone"></ul>
*				</div>
*	复杂的布局：点击a，下拉框div.select-sub显示，并把选中的内容分为俩个，一个显示在input.name中，一个显示在div.select中的input中
*				<input class="name" />
*				<div class="select">
*					<input />
*					<a href></a>
*					<div class="select-sub">
*						<ul></ul>
*					</div>
*				</div>
*/

(function($){
	$.fn.select = function(callback){
		var $this = $(this);
		var texts;
		$this.click(function(){
			$this.siblings('ul.alone').toggle();
			$this.siblings('div.select-sub').show();
			$this.parents('div.select').find('li').click(function(){
				var $this = $(this);
				if(callback){
					texts = callback($this);
					$this.parents('div.select').siblings('input.name').val(texts[0]);
					$this.parents('div.select').children('input').val(texts[1]);
				}else{
					$this.parents('div.select').children('input').val($this.text());
				}
				$this.parents('ul.alone').hide();
				$this.parents('div.select-sub').hide();
			});
		});
	}
})(jQuery);