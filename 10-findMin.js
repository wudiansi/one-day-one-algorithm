function findMin(nums){
  if(!nums.length) return 0
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let mid = Math.floor((left + right) >> 1);
    if(nums[mid] > nums[right]){
      left = mid + 1
    }else{
      right = mid
    }
  }

  return nums[left]
}

console.log(findMin([]))