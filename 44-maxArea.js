function maxArea(height) {
  if(!height.length) return 0
  let left = 0, right = height.length - 1, res = 0;
  while(left < right){
    if(height[left] <= height[right]){
      let cur = height[left] * (right - left);
      res = Math.max(res, cur);
      left++
    }else{
      let cur = height[right] * (right - left);
      res = Math.max(res, cur);
      right--
    }
  }
  return res
}