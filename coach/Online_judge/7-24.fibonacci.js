function fibonacci(num) {
    var answer = 0;
    
    if(num <= 1){
        return num;
    }else if(num >= 2){
        var fibo = [0, 1];
      var j;
        for(var i=2; i<=num; i++){
            j = fibo[i-1] + fibo[i-2];
            fibo.push(j);
        }
        answer = fibo[num];
    }

	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))