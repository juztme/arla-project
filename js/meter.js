var productCodes = ["Z9457FJ2", "A0834KO4", "Q2376GE0", "V9795VL23"]; //array with "hardcoded" product codes, because we don't have a real server

var end = productCodes.length; //the end of the for loop is the last element of the array called productCodes

for (var begin=0; begin < end; begin++) //for loop for the animation of the 
	{
		
		function validator(){ //takes the function called "validator()" from the onClick property of the button in index HTML file
		var x = document.forms["possibilities"]["prodCode"].value; //making a variable that gets the info from what the user inputs in the form
		 	if (x == productCodes[0]){ // if what the user writes in the input field is the first one of the hardcoded product codes, then an alert is going to be displayed (0 is the number of the first element in the array). the same goes for the else if's below
			alert ("One more bomb added to the stash!"); //get a positive alert (response) from the page if the code introduced is the same as the first one in the array
			$("#meter0").hide();
			$("#meter1").show();
			} else if (x == productCodes[1]){
			alert ("One more bomb added to the stash!");
			$("#meter0").hide();
			$("#meter1").hide();
			$("#meter2").show();
			} else if (x == productCodes[2]){
			$("#meter0").hide();
			$("#meter1").hide();
			$("#meter2").hide();
			$("#meter3").show();
			alert ("One more bomb added to the stash!");
			} else if (x == productCodes[3]){
			$("#meter0").hide();
			$("#meter1").hide();
			$("#meter2").hide();
			$("#meter3").hide();
			$("#meter4").show();
			alert ("One more bomb added to the stash!");
			} else {
				alert ("Incorrect code. Please check and resubmit it :D"); //get an alert from the page in case the code introduced doesn't match ANY of the codes in the array
				}
				
	}
	
};