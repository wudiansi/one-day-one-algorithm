function numIslands (grid) {
  // 并查集
  let row = grid.length;
  if(row === 0) return 0
  let col = grid[0].length;
  let parents = [];
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      parents[i*col+j] = i*col+j
    }
  }
  // console.log(parents);
  function find(root){
    if(root !== parents[root]) parents[root] = find(parents[root])
    return parents[root]
  }

  function union(x, y){
    x = find(x);
    y = find(y);
    if(x !== y){
      parents[x] = y;
    }
  }

  for(let i = 0; i < row; i++){
    for( let j = 0; j < col; j++){
      if(grid[i][j] === '1'){
        i < row - 1 && grid[i+1][j] === '1' && union((i+1)*col+j, i*col+j);
        j < col - 1 && grid[i][j+1] === '1' && union(i*col+j+1, i*col+j);
      }else{
        parents[i*col+j] = -parents[i*col+j];
      }
    }
  }

  return parents.filter(
    (value, key) => (key === value && Object.is(key, value))
  ).length
}

console.log(numIslands(
  [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
  ]
))