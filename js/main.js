/* var means you're making a box. Salesdetailsleft is what the box is called.
 .sales__detailsleft is inside the box
*/

var salesdetailsleft = $('.sales__detailsleft');

var salesleft = $('.salesleft');

var buttonClickHandler = function () {
	var currentState = salesdetailsleft.attr('data-state');

	if (currentState == 'active'){
		salesdetailsleft.attr('data-state', 'inactive');
	} else {
		salesdetailsleft.attr('data-state', 'active');
	}
};

salesleft.on('click', buttonClickHandler);


var salesdetailsright = $('.sales__detailsright');

var salesright = $('.salesright');

var buttonClickHandler = function () {
	var currentState = salesdetailsright.attr('data-state');

	if (currentState == 'active'){
		salesdetailsright.attr('data-state', 'inactive');
	} else {
		salesdetailsright.attr('data-state', 'active');
	}
};

salesright.on('click', buttonClickHandler);