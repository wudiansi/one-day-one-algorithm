var solve = function(board) {
  let row = board.length;
  if(!row) return board;
  let col = board[0].length;
  let parents = [];
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      parents[i*col+j] = i* col + j;
    }
  }

  function find(root){
    if(root != parents[root]) parents[root] = find(parents[root])
    return parents[root]
  }

  function union(x, y){
    x = find(x);
    y = find(y);
    if(x !== y){
      parents[x] = y;
    }
  }

  function isConnected(x, y){
    return find(x) === find(y);
  }

  let vertualArea = row * col + 1;
  for(let i = 0; i < row ; i ++){
    for(let j = 0; j < col ; j ++){
      if(board[i][j] === 'O'){
        if(i === 0 || i === row -1 || j === 0 || j === col-1){
          // 边缘O。不能替换，将其查并到vertualArea类下
          union(i*col+j, vertualArea);
        }else {
          // 紧跟边缘O的内部O，题意可知同样不能替换，将其查并到A类下
          i > 0 && board[i-1][j] === 'O' && union(i*col+j, (i-1)*col+j);
          i < row - 1 && board[i+1][j] === 'O' && union(i*col+j, (i+1)*col+j);
          j > 0 && board[i][j-1] === 'O' && union(i*col+j, i*col+j-1);
          j < col -1 && board[i][j+1] === 'O' && union(i*col+j, i*col+j+1);
        }
      }
    }
  }

  // 从非边缘下开始遍历替换不属于A类下的O字符为X，完毕即为所求
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(board[i][i] === 'O' && !isConnected(i*col+j, vertualArea)){
        board[i][j] = 'X';
      }
    }
  }

  return board
};