function hammingDistance(x, y) {
  // let ans = 0;
  // while( x !== 0 || y !== 0){
  //   if((x & 1) !== (y & 1)){
  //     ans++;
  //   }
  //   x >>= 1;
  //   y >>= 1;
  // }
  // return ans;
  let ans = x ^ y, res = 0;//异或排除所有不相同二进制位
  while(ans){
    if(ans&1) res++//最后一位是不是1 是一累加
    ans >>= 1;// 右移一位
  }
  return res
}