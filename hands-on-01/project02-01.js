/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */
let fahrenheit = document.getElementById("fValue").value;
let celsius = document.getElementById("cValue").value;

function myFunction()
{
      let cDegree = document.getElementById("cValue").value;
      fahrenheit.value = CelsiusToFahrenheit(cDegree);
}
function FahrenheitToCelsius(degree)
{
    cValue = degree - 32 / 1.8;
    return cValue;
}
function CelsiusToFahrenheit(degree)
{
      fValue = degree * 1.8 +32
      return fValue;
}

