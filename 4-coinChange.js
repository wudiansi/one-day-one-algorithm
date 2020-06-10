// 给定一个不同面值硬币数组  以及一个 总额amount  
// 求出能凑成总金额所需最少硬币的个数 没有任意一种返回-1
function coinChange(coins, amount){
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for(i = 0; i <= amount; i++ ){
    for(let coin of coins){
      if(i - coin >= 0){
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([1,2,5], 11));