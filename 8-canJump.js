function canJump(nums) {
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    if(max < i) return false
    max = Math.max(max, i + nums[i])
  }
  
  return max >= nums.length - 1
}

console.log(canJump([3,2,1,0,4]))