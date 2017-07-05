// 모듈 추출
var http = require('http');

// 웹 서버 생성
var server = http.createServer();

// 웹 서버 실행
server.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

// 10초 후 함수를 실행합니다.
var test = function(){
    //서버를 종료
    server.close();
};
setTimeout(test, 10000);

