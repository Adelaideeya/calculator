let output = document.getElementById("output");

function calculate(event) {
    event.preventDefault(); // Prevent form submission
    
    try {
        // Evaluate the expression
        let result = eval(output.value);
        
        // Update the display with the result
        output.value = result;
    } catch (err) {
        // If an error occurs during evaluation, show an alert
        alert("Invalid expression");
    }
}

    function clear(){
        output.value="";
    }

    function deleteCharacter(event) {
        event.preventDefault();
        output.value = output.value.slice(0, -1);
    }
    
    