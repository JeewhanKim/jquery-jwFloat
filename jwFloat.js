/* ===================================================
 * jwFloat.js v0.5
 * ===================================================
 * Copyright 2014 Jeewhan Kim
 * Dec 19. 2014, Jeewhan Kim
 * =================================================== */

(function($){

	"use strict";

	$.fn.extend({

		jwFloat: function(options) {

			var defaults = {
				selector: "li",
				bgcolor: "#f9b62d",		// background-color
				hovercolor: "#b47d0d",	// background-color
				margintop: 100, 		// margin-top
				zindex: 9999, 			// z-index
				width: 200, 			// width
				height: 16, 			// height
				padding: 5,
				opacity: 1 				// opacity
			}

			options = $.extend(defaults, options);

			var floating_bg = '<div class="floating_bg">';
			
			var ret = "";
			ret += "<ul>";

			var $_obj = $(this).find(options.selector);

			$_obj.each(function(){
				ret += "<li>" + $(this).html() + "</li>";
			});

			ret += "</ul>";
			floating_bg += (ret + "</div>");

			$(this).parent().prepend(floating_bg);
			$(this).hide();

			$(".floating_bg").css({
				'position' : 'fixed',
				'background-color' : options.bgcolor,
				'margin-top' : options.margintop,
				'z-index' : options.zindex,
				'width' : options.width + 'px',
				'opacity' : options.opacity
			});

			$(".floating_bg ul").css({
				'list-style':'none',
				'margin': 0,
				'padding': 0
			});

			$(".floating_bg ul li").css({
				'list-style':'none',
				'height': options.height + 'px',
				'padding': options.padding + 'px',
				'cursor': 'pointer',
				'background-color': options.bgcolor
			});

			$(".floating_bg ul li").mouseenter(function(){
				$(this).css({'background-color': options.hovercolor})
			}).mouseout(function(){
				$(this).css({'background-color': options.bgcolor})
			});

		}
	});
})(jQuery);