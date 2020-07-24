// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字
function moreThanHalfNum_Solution( numbers ) {
  let result , count = 0;
  for(let i = 0 ; i < numbers.length; i++){
    if(count === 0){
      result = numbers[i];
      console.log('result', result)
      count++;
    }else{
      if(numbers[i] === result){
        count++;
      }else{
        count--;
      }
    }
    console.log('count', count);
  }

  let times = numbers.filter(x => x === result).length;
  return times > Math.floor(numbers.length >> 1) ? result : 0
}
console.log(moreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));