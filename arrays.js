var chocolateBars = ['snickers', 'hundred snickers', 'kitkat', 'skittles' ]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice[-1]
}
