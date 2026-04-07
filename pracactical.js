function convertTemp() {
    let celsius = document.getElementById("celsius").value;

    
    celsius = parseFloat(celsius);

    
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        return;
    }

    
    let fahrenheit = (celsius * 9/5) + 32;

    
    document.getElementById("result").innerHTML = 
        "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
}