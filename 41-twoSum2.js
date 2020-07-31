function twoSum(nums, target) {
  if(!nums.length) return []
  let num = nums.slice(0);
  nums.sort((x,y) => x-y);
  console.log(nums, '--------5------------------------------------------', num);
  let l = 0, r = nums.length - 1;
  console.log('--------7------------------------------------------', l, r);
  console.log('--------8------------------------------------------', nums[r]);
  while(l<r){
    if(nums[l] + nums[r] === target) break;
    else if( nums[l] + nums[r] < target ){
      l++
    }else {
      r--
    }
  }
  console.log('--------16------------------------------------------', l, r);
  l = num.indexOf(nums[l]);
  r = num.indexOf(num[r]) === 1 ? num.indexOf(nums[r], l+1) : num.indexOf(nums[r]);
  return [l, r];
}

console.log(twoSum([1, 3, 2, 5], 4))