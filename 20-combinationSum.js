function combinationSum(candidates, target) {
  let res = [];
  let len = candidates.length;

  candidates.sort((a,b) => a - b)
  function back(path, i, tar){
    if(tar === 0) {
      res.push(path)
      return
    }
    for(let j = i; j < len; j++){
      if(tar < candidates[j]) break;
      path.push(candidates[j]);
      back(path.slice(), j, tar - candidates[j]);
      path.pop();
    }
  }
  back([], 0, target)
  return res
}

console.log(combinationSum([2,3,6,7], 7));