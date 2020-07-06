function exist(board, word) {
  let rowNum = board.length;
  let colNum = board[0].length;

  for(let i = 0; i < rowNum; ++i){
    for(let j = 0; j < colNum; ++j){
      // console.log('--------7------------------------------------------', i, j);
      if(board[i][j] == word[0]) {
        // console.log('--------9----------------------===--------------------');
        let isExist = __exist(board, word, i, j, {})
        if(isExist) return true
      }
    }
  }
  function __exist(_board, _word, _row, _col, visited){
    if(!_word.length) return true

    const key = `${_row}-${_col}`;
    if(
      _row >= _board.length || 
      _row < 0 ||
      _col >= _board[0].length || 
      _col < 0 || 
      visited[key] || 
      _board[_row][_col] !== _word[0]
    ){
      return false
    }

    visited[key] = true
    _word = _word.slice(1);

    const success = 
      __exist(_board, _word, _row + 1, _col, visited) ||
      __exist(_board, _word, _row - 1, _col, visited) ||
      __exist(_board, _word, _row, _col + 1, visited) ||
      __exist(_board, _word, _row, _col - 1, visited);

    visited[key] = success;
    return success
  }
  return false
}
const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, "SEE"))