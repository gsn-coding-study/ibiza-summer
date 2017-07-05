// 모듈 추출
var fs = require('fs');

// 모듈 사용
var text = fs.readFileSync('4-6.textfile.txt', 'utf8');
console.log(text);

fs.readFile('4-6.textfile.txt', 'utf8', function(error, data){
    console.log(data);
});

//4.6.2 파일쓰기
/*
var data = 'helloworld...!';
fs.writeFile('4-6.TextFileOtherWrite.txt', data, 'utf8', function (error){
    console.log('WRITE FILE SYNC COMPLETE');
});


//4.6.3 예외처리
// 파일을 읽습니다.
try {
    var data = fs.readFileSync('4-6.textfile.txt', 'utf8');
    console.log(data);
} catch(e){
    console.log(e);
}

// 파일을 씁니다.
try{
    fs.writeFileSync('4-6.textfile.txt', 'HelloWorld', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch(e){
    console.log(e);
}
*/

//4.6.3 예외처리 - 비동기
// 파일을 읽습니다.
fs.readFile('4-6.textfile.txt', 'utf8', function(error, data){
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
});

// 파일을 씁니다.
fs.writeFile('4-6.textfile.txt', 'HelloWorld222222', 'utf8', function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('FILE WRITE COMPLETE');
    }
});