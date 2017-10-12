/*

//1
var users = [{name:'sookim', age:20}, {name:'mikion', age: 30}];

users.push({name:'sookyung kim', age: 28});

console.log('사용자 수: %d', users.length);
console.log('두 번째 사용자 이름: %s', users[1].name);
*/
//2
var users = [{name:'sookim', age:20}, {name:'mikion', age: 30}];
var add = function(a,b){
    return a+b;
}

users.push(add);

console.log('입력 된 배열 갯수: %d', users.length);
console.log('함수 실행 후 세번째로 들어간 배열의 숫자 : %s', users[2]('글자지롱'));
