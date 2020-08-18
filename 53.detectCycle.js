function detectCycle(head) {
  let fastP = head, slowP = head;
  while(fastP){
    if(fastP.next === null) return null
    slowP = slowP.next
    fastP = fastP.next.next
    if(fastP == slowP){
      fastP = head
      while(true) {
        if(slowP == fastP){
          return slowP
        }
        fastP = fastP.next
        slowP = slowP.next
      }
    }
  }
  return null
}