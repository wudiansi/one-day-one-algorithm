function myPow(x, n) {
  // 递归
  if(n < 0) return 1 / (x * myPow(x, -(n+1))) // 先加1再取整用1除 防止最小负数转正溢出
  if(n === 0) return 1
  if(n === 1) return x

  // return n % 2 === 1
  //   ? x * myPow(x, n - 1)
  //     : myPow(x * x, n / 2)

  // 二分 迭代
  let res = 1;
  while(n > 1){
    if(n % 2 === 1){
      res = res * x
      n--
    }
    x = x * x
    n = n / 2
  }

  return res * x
}

console.log('--------12------------------------------------------', myPow(2.00000, 10));