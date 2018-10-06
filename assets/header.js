$( document ).ready(function() {

	// menu icon for mobile
	$("#mobile-menu-trigger").click(function() {
		if($("#menu").hasClass("closed")) {
			$("#menu").removeClass("closed");
		} else {			
			$("#menu").addClass("closed");
		}
	});

	$("#menu li").click(function() {
		$("#menu").addClass("closed");
	})

});