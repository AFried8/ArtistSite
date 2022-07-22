$(document).ready(function() {
	// move focus to first text box
	$("#name").focus();

	// the handler for the click event of a submit button
	$(".contact_form").submit(
		function(event) {
			var isValid = true;

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			}
			else if(!/^[a-zA-Z]+$/.test(name)){
				$("#name").next().text("Names can't have numbers in them");
			}
			else {
				$("#name").next().text("");
			}
			$("#name").val(name);

			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") {
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);



			// validate the number
			var number = $("#number").val().trim();
			while(number.includes("-")){
			    number.replace("-", "");
            }
            while(number.includes(" ")){
			    number.replace(" ", "");
            }
			if (number == "") {
				$("#number").next().text("This field is required.");
				isValid = false;
            } else if ( isNaN(number) ) {
                $("#number").next().text("Please enter a  number");
                isValid = false;
			} else if ( number.length != 10 && number.length!= 11 ) {
				$("#number").next().text("Please enter a valid phone number");
				isValid = false;
			} else {
				$("#number").next().text("");
			}
			//$("#zip").val(zip);



			// prevent the default action of submitting the form if any entries are invalid
			if (!isValid) {
				event.preventDefault();
			}
		} // end function
	);	// end submit
}); // end ready