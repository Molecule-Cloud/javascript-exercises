const roundedNumber = function(num)
{
	return Math.round(num * 10) / 10;
}

const convertToCelsius = function(unit) 
{
	let conversion = (unit - 32) * (5 / 9);
	rounded = roundedNumber(conversion);
	return rounded;
};
console.log(convertToCelsius());

const convertToFahrenheit = function(unit) 
{
	conversion = (unit * (9 / 5) + 32)
	rounded = roundedNumber(conversion);
	return rounded;
};
console.log(convertToFahrenheit());
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
