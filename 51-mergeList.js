function mergeList(l1, l2) {
  // 递归
  // if(l1 === null){
  //   return l2
  // }else if( l2 === null){
  //   return l1
  // }
  // if(l1.val < l2.val){
  //   l1.next = mergeList(l1.next, l2)
  //   return l1
  // }else {
  //   l2.next = mergeList(l2.next, l1)
  //   return l2
  // }
  // 迭代
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  }
  let preHead = new ListNode(-1);
  let node = preHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next
  }

  if (l1) {
    node.next = l1
  } else if (l2) {
    node.next = l2
  }

  return preHead.next
}