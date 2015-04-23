

$(document).ready(function() {

	$(".generate").on("click", function(){
		i++;
		$(this).append("<div> Line: " + i + "<button class='change'> Change Color </button><button class='remove'> Remove </button></div>");

	});

)};
