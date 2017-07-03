var querystring = require('querystring');
var url = require('url');

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257061');
console.log(querystring.parse(parseObject.query));

