function trap(height) {
  // if(height.length == 0) return 0
  // let left = 0, right = height.length - 1, leftHeight = 0, rightHeight = 0, res = 0;
  // while(left < right){
  //   if(height[left] < height[right]){
  //     leftHeight = Math.max(height[left], leftHeight);
  //     res += leftHeight - height[left];
  //     left++
  //   }else {
  //     rightHeight = Math.max(height[right], rightHeight);
  //     res += rightHeight - height[right];
  //     right--
  //   }
  // }

  // return res
  
  let max = 0, res = 0, leftMax = [], rightMax = [];
  for(let i = 0; i < height.length; i++ ){
    leftMax[i] = max = Math.max(height[i], max);
  }

  max = 0;
  for(let i = height.length - 1; i >= 0; i--){
    rightMax[i] = max = Math.max(height[i], max);
  }

  for(let i = 0; i < height.length; i++ ){
    res = res + Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return res
}