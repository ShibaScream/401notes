'use strict'

function mergeSort (array) {
  if (array.length <= 1) return array
  let midIndex = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, midIndex))
  let right = mergeSort(array.slice(midIndex, array.length))
  return _merge(left, right)
}

function _merge (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length || right.length) {
    let leftovers = left.length ?  left : right
    result = result.concat(leftovers)
  }
  return result
}

module.exports = mergeSort
