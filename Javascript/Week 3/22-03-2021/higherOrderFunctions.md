# HIGHER ORDER FUNCTIONS

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. A Higher-order function is a function that may receive a function as an argument and can even return a function. Higher-order functions are just like regular functions with an added ability of receiving and returning other functions are arguments and output.

In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

Using High-order function makes our code cleaner, more concise and less verbose.
  
For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the language.

Higher-Order Functions in Action

- Array.prototype.filter

The filter() method creates a new array with all elements that pass the test provided by the callback function. The callback function passed to the filter() method accepts 3 arguments: element, index, and array.

Examples:  

Let’s say we have an array which contains objects with name and age properties. We want to create an array that contains only the persons with full age (age greater than or equal to 18).

Without Higher-order function

  
```
const persons = [

  { name: 'Peter', age: 16 },

  { name: 'Mark', age: 18 },

  { name: 'John', age: 27 },

  { name: 'Jane', age: 14 },

  { name: 'Tony', age: 24},

  ];
  const fullAge = [];for(let i = 0; i < persons.length; i++) {

    if(persons[i].age >= 18) {

     fullAge.push(persons[i]);

    }

  }
console.log(fullAge);
```

With Higher-order function filter

```
const persons = [

  { name: 'Peter', age: 16 },

  { name: 'Mark', age: 18 },

  { name: 'John', age: 27 },

  { name: 'Jane', age: 14 },

  { name: 'Tony', age: 24},

];
  const fullAge = persons.filter(person => person.age >= 18);
  console.log(fullAge);
```

Example:

```
function greeting(name) {
  return(`Hello ${name}, welcome to skillup`)
};

function introduction(firstName, secondName, callbackFunction) {
  let fullName = (`${firstName} ${secondName}`)
  return callbackFunction(fullName)
};
console.log(introduction('adedolapo', 'snr man', greeting)); //Returns 'Hello Adedolapo snr man, welcome to skillup'
