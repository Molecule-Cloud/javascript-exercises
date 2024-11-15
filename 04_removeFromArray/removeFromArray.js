const removeFromArray = function(arr, ...args)
{
	// Make a copy of the original Array
	let new_arr = [...arr];
	let i = 0;
	//Loop through the length of the Array
	for(; i < new_arr.length; i++)
	{
		if(args.includes(new_arr[i]))
		{
	//Remove element at the given index
			new_arr.splice(i, 1);
	// Adjust arry to account for the removed element
			i--;
		}
	}
	return new_arr;
};
console.log(removeFromArray([]), )

// Do not edit below this line
module.exports = removeFromArray;
