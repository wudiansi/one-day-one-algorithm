class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

function array2list(ary) {
  if (ary.length === 0) {
    return null
  }
  var nodes = []

  for (var i = 0; i < ary.length; i++) {
    var node = {}
    node.value = ary[i]
    node.next = null
    nodes.push(node)
  }

  for (var i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  return nodes[0]
}
let head = array2list([1, 2, 3, 4, 5]);

/**
 *
 * @param {*} head
 * @param {*} n
 * @returns
 */
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let l = dummy;
  let r = dummy;
  let offset = n + 1;

  while (offset--) {
    r = r.next;
    if (offset > 1 && r === null) {
      return dummy.next
    }
  }

  while (r) {
    console.log('--------51------------------------------------------', r, l);
    r = r.next;
    l = l.next;
  }

  l.next = l.next.next;

  return dummy.next
}


// console.log('--------53------------------------------------------', JSON.stringify(head));
console.log(JSON.stringify(removeNthFromEnd(head, 2)))