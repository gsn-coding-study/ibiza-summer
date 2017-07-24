function printTriangle(num) {
     var result=''; 
     for(var i=1; i<=num; i++){
         result += '*'.repeat(i) + '\n';                 
     }
  return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(5) );