function average(array){
  //함수를 완성하세요
  var sum = 0;
  var length = array.length;

  for(var i=0; i<length; i++){
    sum += array[i];
    console.log(sum);
  }
  
  var avg = sum / length;

return avg;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.

var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));