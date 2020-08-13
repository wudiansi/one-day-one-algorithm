function findNthFromEnd(head, k) {
  if(head === null || k === 0 ) return null
  let fast = head, slow = head;
  while(k--){
    if(fast === null) return null
    fast = fast.next
  }
  while(fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}