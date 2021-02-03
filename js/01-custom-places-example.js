function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 0.7850,
				lng:-36.5557,
				name: "Heni High School",
				street: "Kinangop, Fly-over Njambini Rd.",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


