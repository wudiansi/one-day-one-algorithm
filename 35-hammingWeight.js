function hammingWeight(n) {
  let count = 0;
  while(n !== 0){
    n = n & (n - 1);
    /**
     * n & (n - 1) 按位与  原本最低位为1的那位变为0
     * n > 0 && n & (n - 1) == 0 判断n为2的幂或0
     * */ 
    count++
  }

  return count
}

console.log(hammingWeight(9));