function alpha_string46(s){
  var result = true;
  var length = s.length;
  
  if(length == 4 | length == 6){
      var count = 0;
      for(var i=0; i<length; i++){
          if(isNaN(s[i]) == true){
            count += 1;
          }
        console.log(count + '\n');
      }
        if(count > 0){
            result = false;
        }else
        result = true;
  }else{
    result = false;
  }
  
    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("22345") );