function binarySearchRecursive(array, val) {
  if (!array.length) return false
  let midIndex = Math.floor(array.length / 2)
  let midVal = array[midIndex]
  if (midVal === val) return true
  if (midVal > val) {
    return binarySearchRecursive(array.splice(0, midIndex), val)
  } else {
    return binarySearchRecursive(array.splice(midIndex + 1, array.length))
  }
}

function binarySearchNotRecursive(array, val) {
  if (!array.length) return false
  let start = 0
  let end = array.length-1
  let midIndex = Math.floor(array.length / 2)
  let midVal = array[midIndex]
  while (start <= end) {
    if (midVal === val) return true
    if (start === midIndex && midIndex === end) return false
    if (midVal > val) {
      end = midIndex - 1
      midIndex = Math.floor((end - start) / 2)
      midVal = array[midIndex]
    } else {
      start = midIndex + 1
      midIndex = Math.floor((end + start) / 2)
      midVal = array[midIndex]
    }
    console.log(`\n\nCurrent Vals:\nstart:${start}\nmidIndex:${midIndex}\nend:${end}`)
  }
  return false
}

module.exports = {binarySearchRecursive, binarySearchNotRecursive}
