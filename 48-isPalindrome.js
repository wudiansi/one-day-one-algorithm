function isPalindrome (head) {
  if(head == null || head.next == null) return true
  let mid = head;
  let pre = null;
  let reversed = null;
  while(head !== null && head.next !== null) {
    // 先暂存mid
    pre = mid;

    // 遍历链表
    mid = mid.next;
    head = head.next.next;

    // 反转前部分链表 reversed保存值
    pre.next = reversed;
    reversed = pre;
  }

  // 奇数位时 mid 后移一位
  if(head) mid = mid.next

  while(mid){
    if(mid.val !== reversed.val) return false
    mid = mid.next
    reversed = reversed.next
  }

  return true
}