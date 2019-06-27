var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element) {
  myArray = ["foo"];
  return [...myArray, 1];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  myArray = array;
  myArray.unshift("foo");
  return myArray;
}

function addElementToEndOfArray(array, element) {
  myArray = [1];
  return [...myArray, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element) {
  myArray = array;
  myArray.push("foo");
  return myArray;
}

var entrepreneurs = ["Oprah Winfrey", "Lauren Powell Jobs", "Arianna Huffington"];



function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0)
  return array
}

function DestructivelyRemoveElementFromEndOfArray(array) {
  
}

function removeElementFromEndOfArray(array) {
  
}