function partition(s) {
  let res = [];
  function isOk(str){
    let head = 0;
    let tail = str.length - 1;
    while(head <= tail){
      if(str[head] !== str[tail]) return false
      head++
      tail--
    }
    return true
  }

  function back(path, start){
    if(start === s.length) res.push(path)
    for(let i = start; i < s.length; i++){
      if(!isOk(s.slice(start, i+1))) continue
      console.log('continue')
      path.push(s.slice(start, i+1));
      back(path.slice(0), i+1);
      path.pop();
    }
  }  
  back([], 0);
  return res
}

console.log(partition('abb'));