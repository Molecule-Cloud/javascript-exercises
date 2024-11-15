const sumAll = function(num1, num2)
{
	//Check if num1 or num2 is a negative number or if neither is a integer
	if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2))
	{
		return "ERROR";
	//if num 1 is greater than num2, swap them
	} else if(num1 > num2)
	{
		[num1, num2] = [num2, num1]
	}
	let sum = 0;
	let i = num1;
	//loop through and add the values to sum at every iteration
	while(i <= num2)
	{
		sum += i;
		i++;
	}
	return sum;
};
console.log(sumAll())
// Do not edit below this line
module.exports = sumAll;
