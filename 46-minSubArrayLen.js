function minSubArrayLen (s, nums) {
  let left = 0, right = 0, len = Infinity, sum = 0;
  while(right < nums.length){
    sum += nums[right];
    while(sum >= s){
      len = Math.min(len, right - left + 1);
      sum -= nums[left];
      left++
    }
    right++
  }
  return len === Infinity ? 0 : len
}