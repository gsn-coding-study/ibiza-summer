function findKim(seoul){
  var idx = 0;
  var length = seoul.length;
  for(var i=0; i<length; i++){
      if(seoul[i] == "Kim"){
          idx = i + 1;
          break;
      }
  }
  //함수를 완성하세요

  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));