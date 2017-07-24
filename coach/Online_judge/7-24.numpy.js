function numPY(s){
  var result = true;
  var length = s.length;

 var p = (s.match(/p/g) || []).length;
 p += (s.match(/P/g) || []).length;
 var y = (s.match(/y/g) || []).length;
 y += (s.match(/Y/g) || []).length;
  console.log(p, y);

  if(p == y){
    result = true;
  }else{
    result = false;
  }

  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )