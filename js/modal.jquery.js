(function($){
	$.fn.modal = function (opt) 
	{
	
		var settings, createModal,closeModal, body;
	
		settings = $.extend({
			"modal": "jquery-modal",
			"close": "jquery-modal-close",
			"closeText": "",
			"shade": "jquery-modal-shade"

		},opt);
		
		body = $("body");
		
		closeModal = function (modal,shade)
		{
			modal.remove();
			shade.remove();
		}
		
		
		
		createModal = function(data)
		{
			var shade,close,modal;
			
			shade = $("<div />",{
				class: settings.shade
			}).on("click",function()
			{
				//close
				closeModal(modal,shade);
			});
			
			close = $("<a />",{
				text: settings.closeText,
				class: settings.close,
				href: "#"
			}).on("click",function(e)
			{
				//close
				e.preventDefault();
				closeModal(modal,shade);
			});

			modal = $("<div />",{
				html:data,
				class: settings.modal
			}).append(close);

			body.prepend(shade,modal);
		};
		
		
		
		
		
		this.on("click",function (e)
		{
			var self = $(this);
			e.preventDefault();
			$.ajax(
			{
				url: self.data("content"),
				type: "get",
				cache: false,
				
			
			}).done(function(data)
			{
				createModal(data);
				
			}).error(function()
			{
				createModal("There was an error");
			});
			
		});
	}
	
	
	
	

})(jQuery);