function countBits(num) {
  // let result = [], i = 0;
  // while(i<=num){
  //   result.push( (i.toString(2).match(/1/g) || []).length );
  //   i++
  // }
  // return result

  // 奇偶数 位操作
  // n 为偶数
  // dp[n] = dp[n-1]+1
  // n 为奇数 去n的一般值的1数量
  // dp[n] = dp[n >> 1]; 
  let result = [0];
  let n = 1;
  while(n <= num){
    // 偶数
    if(n & 1 == 1){
      result[n] = result[n-1] + 1;
    }else {
      result[n] = result[n >> 1];
    }
    n++
  }

  return result;
}
console.log(countBits(5))