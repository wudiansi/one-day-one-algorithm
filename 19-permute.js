function permute(nums) {
  let res = [];
  let len = nums.length;

  function back(path) {
    if(path.length === nums.length){
      return res.push([...path])
    }
    for(let i = 0; i < len; i++){
      if(path.indexOf(nums[i]) === -1){
        path.push(nums[i]);
        back(path);
        path.pop();
      }
    }
  }
  back([]);

  return res;
}
console.log(permute([1,2,3,4]))