function isPalindrome(s) {
  let reg = /[a-z]|[0-9]/;
  s = s.splite('').map(x => x.toLowerCase()).filter(x => reg.test(x)).join('');
  let head = 0, tail = s.length - 1;
  while(head <= tail){
    if(s[head] !== s[tail]) return false
    head++
    tail--
  }
  return true
}