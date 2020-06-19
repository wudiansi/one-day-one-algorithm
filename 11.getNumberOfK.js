function GetNumberOfK(data, k){
  let low = 0; hight = data.length - 1;
  let pos, count = 0;

  while(low < hight){
    let mid = Math.floor((low + hight) >> 1);
    if(data[mid] === k){
      pos = mid;
      break;
    }else if( data[mid] < k ){
      low = mid - 1;
    }else{
      hight = mid;
    }
  }

  if(pos !== undefined){
    // 有一个
    count++
    let left = pos, right = pos;
    while(left--){
      if(data[left] === k){
        count++
      }else{
        break
      }
    }

    while(right++){
      if(data[right] === k){
        count++
      }else{
        break
      }
    }

    return count
  }else return 0
}