// 모듈 추출
var crypto = require('crypto');

// 해시 생성

var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 출력
console.log('crypto_hash: ', output);

// crypto 모듈을 사용한 암호화
// 변수 선언
var key = '아무도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipherOutput = decipher.final('utf8');


// 출력합니다.
console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipherOutput);