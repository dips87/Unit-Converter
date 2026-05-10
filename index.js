/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
let input = Number(inputEl.value)
let lengthString = ""
let volumeString = ""
let massString = ""

if(input) {
lengthString = `${input} meters = ${(3.28084 * input).toFixed(3)} feet | 
${input} feet = ${(input / 3.28084).toFixed(3)} meters`            
lengthEl.innerHTML = lengthString 

volumeString = `${input} liters = ${(0.264172 * input).toFixed(3)} gallons | 
${input} gallons = ${(input / 0.264172).toFixed(3)} liters`
volumeEl.innerHTML = volumeString

massString = `${input} kilos = ${(2.20462 * input).toFixed(3)} pounds | 
${input} pounds = ${(input / 2.20462).toFixed(3)} kilos`
massEl.innerHTML = massString
} 

})