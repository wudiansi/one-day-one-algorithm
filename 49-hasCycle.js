var hasCycle = function(head) {
  if(!head || !head.next || !head.next.next) return false;
  let fast = head.next.next,slow = head.next;
  while(fast !== slow){
      if(fast === null || fast.next === null) return false;
      fast = fast.next.next;
      slow = slow.next;
  }
  return true;
}