function spiralOrder (matrix) {
  // 旋转剩余矩阵
  function rotate(arr) {
    if(!arr.length) return []
    let newArr = [];
    for(let i = 0; i < arr[0].length; i++){
      let temp = [];
      for(let j = 0; j < arr.length; j++){
        temp.push(arr[j][arr[0].length-1-i])
      }
      newArr.push(temp)
    }
    
    return newArr
  }

  if(!matrix.length) return []
  let ans = [];
  while(matrix.length) {
    for(let i = 0; i < matrix[0].length; i++) {
      ans.push(matrix[0][i])
    }
    matrix.splice(0, 1)
    matrix = rotate(matrix);
  }
  return ans
  // if(matrix.length == 0) return []
  // const res = [];
  // let top = 0;
  // let bottom = matrix.length - 1;
  // let left = 0;
  // let right = matrix[0].length - 1;
  

  // while(left < right && top < bottom) {
  //   for(let i = left; i < right; i++) res.push(matrix[top][i])
  //   for(let i = top; i < bottom; i++) res.push(matrix[i][right])
  //   for(let i = right; i > left; i--) res.push(matrix[bottom][i])
  //   for(let i = bottom; i > top; i--) res.push(matrix[i][left])
  //   right--
  //   top++
  //   bottom--
  //   left++
  // }
  // // 剩余行
  // if(top == bottom){
  //   for(let i = left; i <= right; i++){
  //     res.push(matrix[top][i])
  //   }
  // }else if(left == right){
  //   for(let i = top; i <= bottom; i++){
  //     res.push(matrix[i][left])
  //   }
  // }else{
  //   return res
  // }
  // return res
}
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));