# Scope of a variable  

Scope in JavaScript refers to context (or portion) of the code which determines the accessibility (visibility) of variables. Scope is simply the life of a variable.


In JavaScript, we have 2 types of scope, local and global.

  

	const message = 'Hello World'

  

	console.log(message) // 'Hello World'

  

### Scoping in conditional statements

  

	if (true) {

	const message = 'Hello World'

	}

  

	console.log(message) // ReferenceError: message is not defined

  

This doesnt work because the if statement creates a local block scope, and since we used const the variable is only declared for that block scope, and cannot be accessed from the outside.

  

### Scoping in functions

  

	function myFunction() {

	let numberOne = 1

	}

	console.log(numberOne) // ReferenceError: x7 is not defined

  

	var x6 = 1

	function myFunction() {

	var x6 = 2

	console.log(x6) // 2

	}

	console.log(x6) // Here, x6 = 1

  

### Scoping in Object

  

	const Dog = {

	name: 'Bingo',

	legs: 4,

	bark: function() {

	return `Woof! Woof!! Woff!!!`

	}

	}
  

	console.log(Dog)
	//Trying to access the bark() function directly 

	console.log(bark()) 
This does'nt work because the function bark() has a Local scope. Itr is a child of the Global variable Dog

  

	Accessing the bark() function the right way.


	console.log(Dog.bark()); 
This would work because we are accessing bark() in the right order. bark() is a child of Dog object and it is only available through the Dog object (Its parent)
