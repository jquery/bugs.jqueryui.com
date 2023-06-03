(function( $, undefined ) {
	$.effects.clip = function(o) {
		return this.queue(function() {
	
			// Create element
			var el = $(this), props = ['position','top','left','height','width'];
			
			// Set options
			var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
			var direction = o.options.direction || 'vertical'; // Default direction
			var centered = (el.css('margin-left') == 'auto' && el.css('margin-right') == 'auto');
			
			// Adjust
			$.effects.save(el, props); el.show(); //alert(el.css('margin-left')); // Save & Show
			var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); if(centered) { wrapper.css({'margin-left':'auto','margin-right':'auto'}); } // Create Wrapper
			var animate = el[0].tagName == 'IMG' ? wrapper : el;
			var ref = {
				size: (direction == 'vertical') ? 'height' : 'width',
				position: (direction == 'vertical') ? 'top' : 'left'
			};
			
			var distance = (direction == 'vertical') ? animate.height() : animate.width();
			if(mode == 'show') { animate.css(ref.size, 0); if(!centered) { animate.css(ref.position, distance / 2); } } // Shift
	
			// Animation 
			var animation = {};
			animation[ref.size] = mode == 'show' ? distance : 0;
			if(!centered) { animation[ref.position] = mode == 'show' ? 0 : distance / 2; }
	
			// Animate
			animate.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
				if(mode == 'hide') el.hide(); // Hide
				$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
				if(o.callback) o.callback.apply(el[0], arguments); // Callback
				el.dequeue();
			}});
		});
	};
})(jQuery);