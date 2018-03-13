var chocolateBars = ['snickers', 'hundred snickers', 'kitkat', 'skittles' ]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}