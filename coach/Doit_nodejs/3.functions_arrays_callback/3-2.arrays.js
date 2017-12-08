/*

//1
var users = [{name:'sookim', age:20}, {name:'mikion', age: 30}];

users.push({name:'sookyung kim', age: 28});

console.log('사용자 수: %d', users.length);
console.log('두 번째 사용자 이름: %s', users[1].name);

//2
var users = [{name:'sookim', age:20}, {name:'mikion', age: 30}];
var add = function(a,b){
    return a+b;
}

users.push(add);

console.log('입력 된 배열 갯수: %d', users.length);
console.log('함수 실행 후 세번째로 들어간 배열의 숫자 : %s', users[2]('글자지롱'));

console.log('\nforEach 구문 사용하기');
users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

//3
var Users = [{name:'sookim', age:20},{name:'mikion', age:20}];
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

Users.push({name:'sookyung', age:20});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

Users.pop();
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

//4
var Users = [{name:'sookim', age:20},{name:'mikion', age:20}];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

Users.unshift({name:'Sookyung Kim', age:20});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

Users.shift();
console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

//5
var Users = [{name:'sookim', age:20},{name:'mikion', age:20},{name:'Sookyung Kim', age:20}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후 배열 요소의 수 : %d', Users.length);
Users.forEach(function(item, index){
    console.log('배열요소 #' + index + ': %s', item.name);
})

//6
var Users = [{name:'sookim', age:20},{name:'mikion', age:20},{name:'Sookyung Kim', age:20}];
console.log('배열 초기화 후 배열 요소의 수 : %d', Users.length);

Users.splice(3,0,{name:'splice', age:6});
console.log('splice()로 요소를 인덱스 3에 추가한 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);

Users.splice(2,1);
console.log('splice()로 요소를 삭제 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);
*/
//7
var Users = [{name:'sookim', age:20},{name:'mikion', age:20},{name:'Sookyung Kim', age:20},{name:'splice', age:6}];
console.log('배열 초기화 후 배열 요소의 수 : %d\n원본Users', Users.length);
console.dir(Users);

var Users2 = Users.slice(1,3);
console.log('slice()로 잘라 낸 후 Users2');
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log('slice()로 잘라 낸 후 Users3');
console.dir(Users3);