// Momotaro interactivity

function toggleVisibility(yesOptions,noOptions) {
	'use strict';
	for( var i = 0; i < yesOptions.length; i++) {
		var good = document.getElementById(yesOptions[i]);
		good.style.display = 'block';
	}
	for( var j = 0; j < noOptions.length; j++) {
		var bad = document.getElementById(noOptions[j]);
		bad.style.display = 'none';
	}
}

function toggleVis(yesOption,noOption) {
	'use strict';
	var good = document.getElementById(yesOption);
	good.style.display = 'block';
	var bad = document.getElementById(noOption);
	bad.style.display = 'none';
}

function hideAll() {
	'use strict';
	var options = document.getElementsByClassName("optional");
	alert(options.length);
	var len = options.length;
	for( var i = 0; i < len; i++) {
		options[i].style.display = 'none';
	}
}

$(document).ready(function() {
    $('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		controlArrows: false,
		loopHorizontal: true,
	});
});