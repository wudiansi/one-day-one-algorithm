function cuttingRope(n) {
  // 动态规划 dp
  // 状态数组dp[i]表示：数字 i 拆分为至少两个正整数之和的最大乘积。为了方便计算，dp 的长度是 n + 1，值初始化为 1。

  // 显然dp[2]等于 1，外层循环从 3 开始遍历，一直到 n 停止。内层循环 j 从 1 开始遍历，一直到 i 之前停止，它代表着数字 i 可以拆分成 j + (i - j)。但 j * (i - j)不一定是最大乘积，因为i-j不一定大于dp[i - j]（数字i-j拆分成整数之和的最大乘积），这里要选择最大的值作为 dp[i] 的结果。
  // const dp = new Array(n+1).fill(1);

  // for(let i = 3; i <= n ; ++i){
  //   for( let j = 1; j < i; ++j){
  //     dp[i] = Math.max( dp[i], j*(i - j) * dp[i -j]);
  //   }
  // }

  // return dp[n];

  //  贪心
  if(n===2) return 1
  if(n===3) return 2

  const a = Math.floor(n/3); //多少个3
  const b = n % 3;
  
  if(b === 0) return Math.pow(a, 3);

  if(b === 1) return Math.pow(a-1, 3) * 4;

  // b === 2
  return Math.pow(a, 3) * 2
}