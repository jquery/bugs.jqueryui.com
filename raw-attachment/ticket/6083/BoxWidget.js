(function(window, document, $) {
	window.BoxWidget = function(parent, initialCount) {
		var me = this;
		me.parent = $(parent);
		me.container = $(document.createElement('div')).attr('id', 'container').appendTo(me.parent);
		
		var setContainerHeight = function() {
			var boxCount = me.container.find('.emptyBox').length;
			var rows = Math.ceil(boxCount / 3);
			me.container.css('height', rows * (112) + 10); // 100px for a box, 10px for each top margin, 2 px for the borders, and 10 px for the last margin bottom
		}
		
		if (initialCount) {
			for (var i = 0; i < initialCount; i++) {
				$(document.createElement('div')).addClass('box emptyBox').appendTo(me.container);
			}
			
			setContainerHeight();
		}
		
		var dropOptions = {
			accept: '.box',
			drop: me.appendBox
		}
		
		me.absorbBox = function(event, ui) {
			var emptyBoxes = me.container.find('.emptyBox').filter(function() { return $(this).children().length == 0 });
			var emptyBox;
			var containerAncestor = ui.draggable.closest('#container')[0];
			
			if (containerAncestor) {
				emptyBox = ui.draggable.parent();
			}
			else if (emptyBoxes.length == 0) {
				emptyBox = $(document.createElement('div')).addClass('box emptyBox').droppable(dropOptions).appendTo(me.container);
				setContainerHeight();
			} else {
				emptyBox = $(emptyBoxes[0]);
			}
			
			me.appendBox.call(emptyBox, event, ui);
		}
		
		me.appendBox = function(event, ui) {
			$(this).children().remove();
			
			var clone = ui.draggable.clone().appendTo($(this));
			clone.children().remove();
			
			var removeMe = $(document.createElement('div'));
			removeMe.addClass('inactiveCloseTab');
			removeMe.appendTo(clone);
			removeMe.click(function() {
				$(this).parent().remove();
			});
			
			function toggleCloseImage() {
				$(this).toggleClass('inactiveCloseTab').toggleClass('closeTab');
			}
			
			removeMe.hover(toggleCloseImage, toggleCloseImage);

			clone.removeClass('original');
			if (!ui.draggable.hasClass('original')) {
				ui.draggable.remove();
			}
			
			clone.removeAttr('style');
			clone.removeClass('ui-draggable-dragging');
			clone.draggable({
				snap: '.emptyBox',
				revert: 'invalid',
				snapMode: 'inner',
				zIndex: 2700
			});	
		}
		
		$('.draggable').draggable({
			helper: 'clone',
			snap: '.emptyBox',
			revert: 'invalid',
			snapMode: 'inner',
			zIndex: 2700
		});
		
		$('#container .emptyBox').droppable({
			accept: '.box',
			drop: me.appendBox
		});
		
		me.container.droppable({
			accept: '.box',
			drop: me.absorbBox
		});
	}
})(window, document, jQuery);