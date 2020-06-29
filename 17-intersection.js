function intersection(nums1, nums2){
  // 全库函数
  // return [...new Set(nums1.filter((item) => {
  //   nums2.includes(item)
  // }))]

  // 二分
  let res = new Set();
  nums2 = nums2.sort((a, b) => a - b);

  let binarySearch = function (key, arr){
    let left = 0, right = arr.length - 1;
    while(left <= right){
      let mid = (left + right) >> 1
      if(arr[mid] === key){
        return true
      }else if(arr[mid] > right){
        right = mid - 1
      }else {
        left = mid + 1
      }
    }
    return false
  }

  for(let i = 0 ; i < nums1.length; i++){
    if(binarySearch(nums1[i])){
      res.add(nums1[i])
    }
  }

  return [...res]
}