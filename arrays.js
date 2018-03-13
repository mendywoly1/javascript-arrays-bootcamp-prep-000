var chocolateBars = ['snickers', 'hundred snickers', 'kitkat', 'skittles' ]


function addElementToBeginningOfArray(array, element) {
  var arr1 = [element, ...array]
  return arr1
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arr2 = [...array, element]
  return arr2
}

function destructivelyAddElementToEndOfArray (array, element) {
  
}