/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem(array, callback) {
	var firstElement = array[0];
	return firstElement;
};

firstItem(foods, function(firstItem) {
  console.log('The first item is ' + firstItem);
});

// Write a function called getLength that passes the length of the array into the callback

function getLength(array, callback) {
	callback(array.length);
}

getLength(foods, function(length) {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback
function last(array, callback){
	var lastItem = array[array.length-1];
	callback(lastItem);
};

last(foods, function(lastItem) {
  console.log('The last item in the array is ' + lastItem);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback

function sumNums(number1, number2, callback){
	callback(number1+number2);
};

sumNums(5, 10, function(sum) {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

function multiplyNums(number1, number2, callback){
	callback(number1*number2);
};

multiplyNums(5, 10, function(product) {
  console.log('The product is ' + product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

function contains(array, what, callback){
	if(array.indexOf(what)>=0) callback(true);
  else callback(false);
};

contains(foods, 'ribeye', function(result) {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

function removeDuplicates(array, callback){
 var noDuplicates=[];
 for(i=0;i<array.length;i++) {
	if(noDuplicates.indexOf(array[i])==-1) noDuplicates.push(array[i]);
 }
  callback(noDuplicates);
}

removeDuplicates(foods, function(uniqueFoods) {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

function forEach(array, callback) {
	for(i=0;i<array.length;i++) {
		callback(array[i], index=i);
	}
}

forEach(foods, function(value, index) {
  console.log(value + ' is at index ' + index);
});
