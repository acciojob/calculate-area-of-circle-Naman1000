 function calculateArea() {
            // Get the radius from the user using the prompt() function
          
	 let radius = prompt("Enter the radius of the circle:");
    radius = parseFloat(radius);

    // Calculate area if input is valid
    if (radius > 0) {
        let area = Math.PI * radius * radius;
        area = area.toFixed(2);
        console.log(`The area of the circle with radius ${radius} is ${area}`);
        return area;
    } else {
        console.log("Please enter a positive number for radius.");
        return null;
    }
	 
           
}
calculateArea();
