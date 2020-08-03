function treeSum(nums) {
  if (nums.length < 3) return []
  nums.sort((x, y) => x - y);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    //  去重
    if (i && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}
console.log(treeSum([-1, 0, 1, 2, -1, -4]));