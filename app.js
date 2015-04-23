var i = 0;

$(document).ready(function() {

	$(".generate").click(function(){
		i++;
		$(".header").append("<div> Line: " + i + "<button class='change'> Change Color </button><button class='remove'> Remove </button></div>");

	});

	$(".change").click(function(){
		$(this).css("background-color", "green");
		console.log("hi!");
	});

	$(".remove").click(function(){
		$(this).parent().parent().remove();
	});

});



// $(this).replaceWith("<button class='change2'> Change Color </button>");