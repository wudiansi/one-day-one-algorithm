// 0 1组成的二维矩形中 找只包含1的最大正方形 并返回其面积
// matrix [][]
function maximalSquare(matrix) {
  if(matrix.length === 0) return 0
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = [];
  let max = Number.MIN_VALUE;

  for(let i = 0; i <= rows; i++) {
    if(i === 0){
      dp[i] = Array(cols+1).fill(0);// 第一行都是0
    }else{
      dp[i] = [0];// 其他为第一个为0的数组
    }
  }

  // 从1开始
  for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= cols; j++){
      if(matrix[i-1][j-1] === '1'){
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;// 加一是长度边长值为row/col+1
        max = Math.max(dp[i][j], max);
      }else{
        dp[i][j] = 0;
      }
    }
  }

  return max*max
}