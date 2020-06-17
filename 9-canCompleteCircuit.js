/**
 * gas 加油站非空正整数数组
 * cost 加油站耗油非空数组
*/
function canCompleteCircuit(gas, cost) {
  let start = 0, cur = 0, total = 0;
  for( let i = 0; i < gas.length; i++ ){
    total += gas[i] - cost[i];
    if(cur < 0){
      // 上一次走到了油量不够 重新初始化cur
      cur = gas[i] - cost[i]
      start = i;
    }else{
      cur += gas[i] - cost[i]
    }
  }

  return total >= 0 ? start : -1
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));