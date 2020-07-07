function bubblesort(arr) {
  for(let i = 1; i < arr.length; i++ ){
    console.log('i:', i);
    for( let j = i; j > 0; j--){
      console.log('i:', i,'j:', j);
      if(arr[j] < arr[j-1]){
        console.log(arr[j-1], arr[j], 'next < pre');
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }

  return arr
}
console.log(bubblesort([6,5,3,1,8,7,2,4]))