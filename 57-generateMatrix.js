function generateMatrix(n) {
  let a = new Array()
  for(let i = 0; i < n; i++)
    a[i] = new Array

  console.log('--------5------------------------------------------', a);
  let bounldl = 0;
  let bounldr = n - 1;
  let bounldu = 0;
  let bounldd = n - 1;
  for(let k = 1, i = 0, j = 0, turn ='r'; k <= n*n; k++){
    a[i][j] = k
    if(turn === 'r'){
      j++
      if(j === bounldr){
        bounldu++
        turn = 'd'
      }
    }else if(turn === 'd'){
      i++
      if(i === bounldd){
        bounldr--
        turn = 'l'
      }
    }else if(turn === 'l'){
      j--
      if(j === bounldl){
        bounldd--
        turn = 'u'
      }
    }else if(turn === 'u'){
      i--
      if(i === bounldu){
        bounldl++
        turn = 'r'
      }
    }
  }
  return a
}
console.log('--------39------------------------------------------', generateMatrix(3));