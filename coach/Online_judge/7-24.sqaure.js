function nextSqaure(n){
  
  var result = 0;
  var sqaure = 0
  for(var x=1; x<n/2; x++){
    sqaure = x*x;
    if(sqaure == n){
      result = (x+1)*(x+1);
      break;
    }else
    result = 'no';
  }
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));