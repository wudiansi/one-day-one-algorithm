/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.in = 0;
  }
}

class Graph {
  constructor(nums, edges){
    this.list = new Array(nums);
    for(let i = 0; i < this.list.length; i++){
      this.list[i] = new Node(i);
    }
    let v1, v2, newNode = null;
    for(let edge of edges){
      [v2, v1] = edge;
      newNode = new Node(v2);
      newNode.next = this.list[v1].next;
      this.list[v1].next = newNode;
      this.list[v2].in++;
    }
  }
}

var canFinish = function(numCourses, prerequisites) {
  let list = new Graph(numCourses, prerequisites).list;
  let stack = [];
  for(let node of list){
    node.in === 0 && stack.push(node)
  }
  let count = 0;
  while(stack.length){
    let node = stack.pop();
    count++;
    while(node.next){
      (--list[node.next.value].in) === 0 && stack.push(list[node.next.value]);
      node = node.next;
    }
  }

  return count === list.length
};