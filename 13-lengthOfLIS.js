function lengthOfLIS(nums) {
  // dp 方式 时间复杂度为O(n^2)

  // let n = nums.length;
  // if(n === 0) return 0
  // let max = 0;
  // let dp = new Array(n).fill(1);

  // for(let i = 0; i < n; i++){
  //   for( let j = 0; j < i; j++){
  //     if(nums[j] < nums[i]){
  //       dp[i] = Math.max(dp[i], dp[j]+1);
  //     }
  //   }
  //   max = Math.max(max, dp[i]);
  // }
  // return max

  // 二分方式
  let n = nums.length;
  if(n<=1){
    return n
  }
  let tail = [nums[0]];
  for(let i = 0; i < n; i++){
    if(nums[i] > tail[tail.length-1]){
      tail.push(nums[i])
    }else{
      let left = 0,
      right = tail.length -1;
      while(left < right){
        let mid = (left + right) >> 1;
        if(tail[mid] < nums[i]){
          left = mid + 1;
        }else{
          right = mid;
        }
      }
      // 替代进去
      tail[left] = nums[i]
    }
  }
  return tail.length
}