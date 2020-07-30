/**
 * 不用四则运算符 求出两个正整数之和
 * @param {*} num1 正整数
 * @param {*} num2 正整数
 * @returns 
 * ^ 算出各位相加忽略进位后的值 _num1
 * & 后再 << 1 算出各位进位的值 _num2
 * 然后两个值再相加重复上述步骤只至进位值 X_num2 值为0 跳出为最终结果
 */
function twoSum(num1, num2) {
  return num2 ? twoSum(num1 ^ num2, (num1 & num2) << 1) : num1;
}

console.log(twoSum(5, 7))
