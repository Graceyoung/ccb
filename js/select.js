/*
*	selectѡ���һ�ֵ�һ�ģ�һ�ָ��ӵ�
*	��һ�Ĳ��֣����input��������ul��ʾ������ѡ�е�������ʾ��input��
*				<div class="select">
*					<input />
*					<ul class="alone"></ul>
*				</div>
*	���ӵĲ��֣����a��������div.select-sub��ʾ������ѡ�е����ݷ�Ϊ������һ����ʾ��input.name�У�һ����ʾ��div.select�е�input��
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