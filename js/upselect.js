(function($){
	$.fn.upselect = function(callback){
		var $this = $(this);
		$this.click(function(){
			var $sub = $this.parents('div.select').children('div.select-sub');
			$sub.show();
			callback&&callback($sub);
			$('em.select-close',$sub).click(function(){
				$(this).parents('div.select-sub').hide();
			});
			$('li',$sub).click(function(){
				var $this = $(this);
				var  htmltext = $this.text().replace(/(\n)|(\s)/g,"");
				var regName = /[\u4e00-\u9fa5]{1,10}/;
				var regNum = /[\d\*]{1,19}/;
				$this.parents('div.select').siblings('input.name').val(regName.exec(htmltext)[0]);
				$this.parents('div.select').children('input').val(regNum.exec(htmltext)[0]);
				$this.addClass('selected').siblings().removeClass('selected');
				$this.parents('div.select-sub').hide();
				$this.addClass('selected').siblings().removeClass('selected');
			});
		});
	}
})(jQuery);