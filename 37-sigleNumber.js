function singleNumber(nums) {
/**
 * 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
 * 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
*/
  let ans = 0;
  for(let num of nums){
    ans ^= num;
  }

  return ans
}