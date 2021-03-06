/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.in = 0;
  }
}

class Graph{
  constructor(nodeNum, edges){
    this.list = new Array(nodeNum);
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

var findOrder = function(numCourses, prerequisites) {
  let list = new Graph(numCourses, prerequisites).list;
  let stack = [], res = [];
  for(let node of list){
    node.in === 0 && stack.push(node);
  }
  let count = 0;
  while(stack.length){
    let node = stack.pop();
    count++;
    res.push(node.value);
    while(node.next){
      --list[node.next.value].in === 0 && stack.push(list[node.next.value]);
      node = node.next;
    }
  }

  if(count != list.length) return []
  else return res
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));