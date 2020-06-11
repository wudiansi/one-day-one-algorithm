
function uniquePaths(m, n) {
  var dp = new Array();
  for(var i = 0 ; i < n; i++ ){
    dp[i] = new Array(m);
    dp[i][0] = 1;
  }

  for(var z = 0; z < m; z++){
    dp[0][z] = 1;
  }

  for(var x = 1; x < n; x++){
    for(var y = 1; y < m; y++){
      dp[x][y] = dp[x-1][y] + dp[x][y-1];
    }
  }

  // console.log('--------30------------------------------------------', dp);
  return dp[n-1][m-1]
}
