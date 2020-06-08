function rob(nums) {  
  let len = nums.length;
  if(len === 0) return 0; // 空数组
  if(len === 1) return nums[0];
  if(len === 2) return Math.max(nums[0], nums[1]);
  if(len === 3) return Math.max(nums[1], nums[0] + nums[2]);
  let dp = [nums[0], Math.max(nums[0], nums[1]), Math.max(nums[1], nums[0] + nums[2])];

  for(var i = 3; i < len; i++ ) {
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
  }

  return Math.max(dp[len-1], dp[len-2])
}