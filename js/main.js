var buttonClickHandler = function () {
	var currentState = sales__details.attr('data-state');

	if (currentState == 'active'){
		sales__details.attr('data-state', 'inactive');
	} else {
		sales__details.attr('data-state', 'active');
	}
};