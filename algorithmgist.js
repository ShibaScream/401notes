let array = [0,1,2,3,2]; //should be one count

function countIncrements(arr) {
  count = 0;
  isIncrement = false;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] <= arr[i-1]){
      if(isIncrement) {
        count += 1;
        isIncrement = false;
      }
    } else {
      isIncrement = true;
    }
  }
  if(isIncrement){
    count += 1;
  }
  return count;
}
