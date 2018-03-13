var chocolateBars = ['snickers', 'hundred snickers', 'kitkat', 'skittles' ]


function addElementToBeginningOfArray(array, element) {
  var arr1 = [element, ...array]
  return arr1
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
}