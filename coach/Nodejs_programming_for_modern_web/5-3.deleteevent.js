//변수 선언
/*
var onUncaughtException = function (error){
    console.log('예외가 발생했군 ^_^ 한번만 봐주겠다 ^_^..!');
    // 이벤트를 제거
    process.removeListener('uncaughtException', onUncaughtException);
};
*/

// process 객체에 uncaughtexception 이벤트를 연결합니다.
//process.on('uncaughtException', onUncaughtException);
process.once('uncaughtException', function(error){
    console.log('예외가 발생했군 ^_^ 한번만 봐주겠다 ^_^..!');
});

// 2초 간격으로 예외 발생
var test = function (){
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test, 2000);


