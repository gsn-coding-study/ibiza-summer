function hide_numbers(s){
  var result;
  //함수를 완성해주세요
  if(s.length == 11){
    result = '*******' + s.substring(7, 11);
  } else if(s.length == 10){
    result = '******' + s.substring(6, 10);
  } else
    result = '*****' + s.substring(5, 9);
  
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));

// 다른 풀이를 보는데 이런게 있었다.
/*
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
*/