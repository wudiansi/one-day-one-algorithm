function numIslands (grid) {
  // 并查集
  // let row = grid.length;
  // if(row === 0) return 0
  // let col = grid[0].length;
  // let parents = [];
  // for(let i = 0; i < row; i++){
  //   for(let j = 0; j < col; j++){
  //     parents[i*col+j] = i*col+j
  //   }
  // }
  // // console.log(parents);
  // function find(root){
  //   if(root !== parents[root]) parents[root] = find(parents[root])
  //   return parents[root]
  // }

  // function union(x, y){
  //   x = find(x);
  //   y = find(y);
  //   if(x !== y){
  //     parents[x] = y;
  //   }
  // }

  // for(let i = 0; i < row; i++){
  //   for( let j = 0; j < col; j++){
  //     if(grid[i][j] === '1'){
  //       i < row - 1 && grid[i+1][j] === '1' && union((i+1)*col+j, i*col+j);
  //       j < col - 1 && grid[i][j+1] === '1' && union(i*col+j+1, i*col+j);
  //     }else{
  //       parents[i*col+j] = -parents[i*col+j];
  //     }
  //   }
  // }

  // return parents.filter(
  //   (value, key) => (key === value && Object.is(key, value))
  // ).length

  // DFS
  const row = grid.length;
  if(!row) return 0;
  const col = grid[0].length;
  let res = 0;
  for(let i = 0; i < row ; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] === '1'){
        res++;
        dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, i, j){
    if(i < 0 || i >= row || j < 0 || j >= col) return
    if(grid[i][j] === '1'){
      grid[i][j] = '0';
      dfs(grid, i - 1, j);
      dfs(grid, i + 1, j);
      dfs(grid, i , j - 1);
      dfs(grid, i , j + 1);
    }
  }

  return res
}

console.log(numIslands(
  [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
  ]
))