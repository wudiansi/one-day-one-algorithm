function rotate(matrix) {
  if (matrix.length == 0) return []
  let left = 0, right = matrix.length - 1;
  while (right - left > 0) {
    [matrix[left], matrix[right]] = [matrix[right], matrix[left]];
    left++
    right--
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
}