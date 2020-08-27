function setZeros(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (Object.is(matrix[i][j], 0)) {
        for (let k = 0; k < matrix.length; k++) {
          if (k != i && Object.is(matrix[k][j], 0)) continue
          else matrix[k][j] = -0
        }
        for (let k = 0; k < matrix[i].length; k++) {
          if (k != j && Object.is(matrix[i][k], 0)) continue
          else matrix[i][k] = -0
        }
      }
    }
  }
  return matrix
}