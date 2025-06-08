function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    if (isNaN(temperature)) {
        document.getElementById("celsius").innerText = "Invalid Input";
        document.getElementById("fahrenheit").innerText = "Invalid Input";
        document.getElementById("kelvin").innerText = "Invalid Input";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case "celsius":
            celsius = temperature;
            fahrenheit = (temperature * 9 / 5 + 32).toFixed(2);
            kelvin = (temperature + 273.15).toFixed(2);
            break;
        case "fahrenheit":
            celsius = ((temperature - 32) * 5 / 9).toFixed(2);
            fahrenheit = temperature;
            kelvin = ((celsius * 1) + 273.15).toFixed(2);
            break;
        case "kelvin":
            celsius = (temperature - 273.15).toFixed(2);
            fahrenheit = (celsius * 9 / 5 + 32).toFixed(2);
            kelvin = temperature;
            break;
    }

    document.getElementById("celsius").innerText = `${celsius}°C`;
    document.getElementById("fahrenheit").innerText = `${fahrenheit}°F`;
    document.getElementById("kelvin").innerText = `${kelvin}K`;
}