function getInterSectionNode(headA, headB) {
  let p1 = headA, p2 = headB;
  if (p1 == null || p2 == null) return null

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? heada : p2.next;
  }
  return p1
}