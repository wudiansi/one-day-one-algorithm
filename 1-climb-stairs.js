//  N个台阶
//  1步或者2步爬到顶
//  关键：fill n+1 数组 到i阶有i-1走一步 或 i-2走两步两种情况
function climbStairs(n) {
  let dp = new Array(n+1).fill(0);
  dp[0] = 1, dp[1] = 1;

  for(var i = 2; i < dp.length; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n]
}