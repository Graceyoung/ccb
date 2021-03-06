//placeholder兼容IE
(function($){
	$.fn.placeholderIe = function(){
		supportPlaceholder='placeholder'in document.createElement('input');//判断浏览器是否支持placeholder
		if(!supportPlaceholder){
			var $input = $('input[type!="submit"]',this);
			$input.focus(function(){
				var $this = $(this);
				if($this.val()==$this.attr('placeholder')){
					$this.val("");
				}
				if($this.attr('evertype')=='password')$this.attr('type','password');//密码的type="password",evertype是自定义属性，记录原始type
			});
			$input.blur(function(){
				var $this = $(this);
				if($this.val()==$this.attr('placeholder')||$this.val()==""){
					$this.val($this.attr('placeholder'));
					$this.attr('type','text');
				}
			});
			$input.each(function(){
				var $this = $(this);
				var $placeholder = $this.attr('placeholder');
				if($placeholder!=null){
					$this.val($placeholder);
					$this.attr('type','text');//显示placeholder的值，密码的type="text",否则显示的是实心圆
				}
			});
		}
	}
})(jQuery);