// variable declaration
let kelvin = 294;
const celsius = kelvin-273;
//fahrenheit computation
let fahrenheit = celsius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit); //rounding to the nearest whole number
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`); //outputs the temperature
kelvin = prompt('What is the Kelvin temperature today?');