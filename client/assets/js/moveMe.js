

$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

$('ul').on('click','span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stopPropagation is important since when clicking the X, it does not trigger another element click. 
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// This pulls the value of the user input and stores it
		var toDoTxt = $(this).val();
		// This is appending a new list item after user hits enter. 
		$('ul').append("<li><span>X</span> " + toDoTxt + "</li>");
		$(this).val('');
	}
});