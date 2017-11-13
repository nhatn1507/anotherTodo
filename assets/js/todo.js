$(document).ready(function() {
	$('input').focus();

	$('input').on('keypress', function(event) {
		if (event.which === 13){
			var text = $('input').val();
			var newItem = $(`<li> ${text} </li>`);
			$('ul').append(newItem);
			$('input').val('');
		}
	})


	$('li').on('click', function() {
		$(this).toggleClass('completedTodo');
	})

	$('span.plus').on('click', function() {
		$('input').fadeToggle('fast', 'linear');
	})

	
	$('li').on('mouseenter', function() {
		var trash = $('<span class="remove"><i class="fa fa-trash fa-lg"></i></span>');
		$(this).append(trash);
		$(this).css('padding-left', '0');
		trash.fadeIn(450);
	});
	$('li').on('mouseleave', function() {
		$(this).css('padding-left', '15px');
		$(this).children().remove();
	});


	//*** NOTE : $('span.remove').on('click', function(event) { event.stopPropagation}
	// DOESN'T WORK, because span is dynamically generated
	// element.on(....) element has to existed before span.remove, and span.remove need to be the selector
	$('li').on('click', 'span.remove', function(event) {
		var item = $(this).parent();
		item.fadeOut('medium', function() {
			item.remove();
		});

		event.stopPropagation(); // prevent clicking li
	});

	$('input').on('blur', function() {
		$(this).val('');
	})

});