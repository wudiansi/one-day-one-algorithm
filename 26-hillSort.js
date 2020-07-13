function hillSort(arr) {
  let len = parseInt(arr.length/2);
  while(len){
    for(let i = len;i < arr.length; i++ ){
      let rightTeam = arr[i];
      for(let j = i - len; j >= 0; j -= len){
        if(rightTeam < arr[j]){
          arr[j+len] = arr[j];
          arr[j] = rightTeam;
        }else{
          break
        }
      }
    }
    len = parseInt(len/2)
  }
  return arr
}
console.log(hillSort([2,4,11,3,9,1,22]))