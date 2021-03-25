 


# Map and Reduce

## Array.prototype.map
  
The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value from the callback function and creates a new array using those values.

The callback function passed to the map() method accepts 3 arguments: element, index, and array.

Examples:

Let’s say we have an array of numbers and we want to create a new array which contains double of each value of the first array. 
```
const arr1 = [1, 2, 3];const arr2 = arr1.map(function(item) {

return item * 2;

});
console.log(arr2);
```
OR 
```
const arr1 = [1, 2, 3];const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```
 #2

Let’s say we have an array containing the birth year of different persons and we want to create an array that contains their ages. For example:
  ```
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);

console.log(ages); // prints [ 43, 21, 16, 23, 33 ]
```
  
 ## Array.prototype.reduce

The reduce method executes the callback function on each member of the calling array which results in a single output value. The reduce method accepts two parameters: 1) The reducer function (callback), 2) and an optional initialValue.

The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.

If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array. 

If no initialValue is provided, then the accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.

Examples:

Let’s say we have to sum an array of numbers:
  ```
const arr = [5, 7, 1, 8, 4];const sum = arr.reduce(function(accumulator, currentValue) {

return accumulator + currentValue;

});

console.log(sum); // prints 25
```  

Every time the reducer function is called on each value in the array, the accumulator keeps the result of previous operation returned from the reducer function, and the currentValue is set to the current value of the array. In the end the result is stored in the sum variable.


We can also provide an initial value to this function:

  ```

const arr = [5, 7, 1, 8, 4];const sum = arr.reduce(function(accumulator, currentValue) {

return accumulator + currentValue;

}, 10);

console.log(sum); // prints 35
```
