var i = 0;
var flipFlop;

$(document).ready(function() {

	$(".generate").click(function(){
		i++;
		$(".header").append("<div> Line: " + i + "<button class='change'> Change Color </button><button class='remove'> Remove </button></div>");

	});

	$("div").on("click", ".change", function(){
		$(this).parent().css("background-color", "#FF3399");

	});

	$("div").on("click", ".remove", function(){
		$(this).parent().remove();
	});

});



// $(this).replaceWith("<button class='change2'> Change Color </button>");