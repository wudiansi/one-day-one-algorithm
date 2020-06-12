/**
* 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
* 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
* 注意：你不能在买入股票前卖出股票
 */
function maxProfit1(prices){
  // if(prices.length <= 1) return 0
  // let diff = [];
  // for(let i = 0; i < prices.length - 1; i++) {
  //   diff[i] = prices[i+1] - prices[i]
  // }
  // let dp = new Array(prices.length).fill(0);
  // dp[0] = Math.max(0, diff[0]);
  // let max = dp[0];
  // for(let i = 1; i < prices.length - 1; i++){
  //   dp[i] = Math.max(0, dp[i-1] + diff[i])
  //   max = Math.max(dp[i], max)
  // }

  // return max
  let last = 0;
  let max = 0;
  for( let i = 0; i < prices.length - 1; i++){
    last = Math.max(0, last + prices[i+1] - prices[i]);
    max = Math.max(last, max);
  }

  return max
}
// console.log(maxProfit1([7,1,5,3,6,4]));

/**
* 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
* 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
* 注意：你不能在买入股票前卖出股票(你必须在再次购买前出售掉之前的股票)
 */
function maxProfit2(prices){
  let sum = 0;
  for(let i = 0; i < prices.length - 1; i++ ){
    if(prices[i+1] > prices[i]) sum += prices[i+1] - prices[i]
  }

  return sum
}