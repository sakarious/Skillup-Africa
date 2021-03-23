# Infinite Loops

An infinite loop is a sequence of instructions that will continue endlessly, unless an external intervention occurs. 
An infinite loop occurs when a condition always evaluates to true. Usually, this is an error.

	Example:
	for (number = 100; number >= 5; j++){
	console.log(j)
	}
	
	Result: This code run infinitely.

 
 
# For loops
 
Forloop loops through a block of code a number of times. They are commonly used to count a certain number of iterations to repeat a statement.
A for loop statement consists of three expressions and a statement:

- initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished it’s execution they are destroyed.

- condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop’s statement is executed. If it evaluates to false, the loop stops.

- final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.

- statement - Code to be repeated in the loop

		Syntax:
	
		for (initialization;condition; final-expression) {

		statement

		}

  

		Example:

		for (var i = 0; i < 9; i++) {

		console.log(i);

		}

  

		output:

		0

		1

		2

		3

		4

		5

		6

		7

		8


# For Each Loop 

The forEach method is used to loop through arrays, but it uses a function differently than the for loop.

The forEach method calls a function once for each element in an array, in order. The function is not executed for array elements without values.

The forEach method passes a callback function for each element of an array together with the following parameters:

Current Value (required) - The value of the current array element

Index (optional) - The current element's index number

Array (optional) - The array object to which the current element belongs

	  Syntax is:

	array.forEach(function(currentValue, index, arr), thisValue)

  

	Example:
	const numbers = [1,2,3,4,5]
	numbers.forEach(function(number) {

	console.log(number);

	});

		OR
	
	numbers.forEach(number => console.log(number));

	OUTPUT:
	1
	2
	3
	4
	5


# For Of Loop  
The for of statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.  

	Syntax:

	for (variable of object) {

	statement

	}

  

	Examples:

	let myGuys = [ "fred", "tom", "bob" ]; 

	for (let i of arr) {

	console.log(i);
	}

	  Output:
	 fred
	 tom
	 bob
