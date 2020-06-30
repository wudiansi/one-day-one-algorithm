function subsets(nums) {
  // 回溯
  // let res = [];
  // let n = nums.length;
  // function back(path, i){
  //   if(i <= n){
  //     res.push(path)
  //   }
  //   for(let j = i; j < n; j++){
  //     path.push(nums[j])
  //     back(path.slice(0), j+1)
  //     path.pop()
  //   }
  // }
  // back([], 0);
  // return res;
  // 迭代
  let res = [[]];
  for(let i = 0; i< nums.length; i++){
    let len = res.length;
    for(let j = 0 ; j < len; j++){
      res.push([...res[j], nums[i]]);
    }
  }
  return res
}

console.log(subsets([1,2,3,4]))