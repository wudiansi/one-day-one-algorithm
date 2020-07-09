function quickSort(arr) {
  if(arr.length <= 1) return arr
  let key = arr.shift(), left = [], right = [];
  for(let value of arr){
    if(value <= key) {
      left.push(value)
    }else{
      right.push(value)
    }
  }

  return quickSort(left).concat(key, quickSort(right))
}