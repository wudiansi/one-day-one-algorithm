function mergeSort (nums) {
  function merge(l1, r1, l2, r2){
    let arr = [];
    let index = 0;
    let i = l1, j = l2;
    while(i <= r1 && j <= r2){
      arr[index++] = nums[i] <= nums[j] ? nums[i++] : nums[j++]
    }
    // 只剩下其中一个数组
    while(i <= r1) arr[index++] = nums[i++]
    while(j <= r2) arr[index++] = nums[j++]

    // 拷贝数组
    for(let t = 0 ; t < index; t++){
      nums[t+l1] = arr[t]
    }
  }

  function recursive(left, right){
    if(left >= right) return
    let mid = Math.floor((right - left) >> 1) + left;
    recursive(left, mid);
    recursive(mid+1, right);
    merge(left, mid, mid+1, right);
    return nums
  }

  recursive(0, nums.length -1);

  return nums
}
console.log(mergeSort([6,5,3,1,8,7,2,4]))