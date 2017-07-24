function waterMelon(n){

    var result = '';
  
  //함수를 완성하세요

  for(var i=1; i<=n; i++){
      result = (i % 2) ? result += "수" : result += "박";
  }

  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(7))
console.log("n이 4인 경우: "+ waterMelon(4))