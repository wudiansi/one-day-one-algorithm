function treeSumClosest(nums, target) {
  if(!nums.length) return 0;
  let res = Infinity,mins = Infinity;
  nums.sort((x,y) => x-y);
  for(let i = 0;i < nums.length;i++){
      let left = i + 1,right = nums.length-1;
      while(left < right){
          mins = Math.min(Math.abs(nums[i]+nums[left]+nums[right]-target),mins);
          mins === Math.abs(nums[i]+nums[left]+nums[right]-target) 
          && (res = nums[i]+nums[left]+nums[right]);
          if(nums[i]+nums[left]+nums[right] < target){
              left++;
          }else if(nums[i]+nums[left]+nums[right] > target){
              right--;
          }else{
              break;
          }
      }
  }
  return res;
}

console.log(treeSumClosest([0,0,0], 1))