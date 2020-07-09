function insertSort(arr) {
  for(let i = 0; i < Array.length ; i ++){
    let j = i - 1;
    if(arr[i] < arr[j]){
      let temp = arr[i];
      while(j >= 0 && temp < arr[j]){
        arr[j+1] = arr[j]
        j--
      }

      arr[j+1] = temp;
    }
  }
  return arr
}
