/*

//1
var age = 20;
console.log('나이 : %d', age);

//2
var person = {};

person['age'] = 20;
person['name'] = 'sookim';
person.mobile = 'iphone';

console.log('나이는 : %d \n이름은 : %s \n핸드폰은 : %s', person.age,person.name,person['mobile']);

//3~4
function add(a,b){
    return a+b;
}

var result = add(10, 10);

console.log('10더하기 10은 : %d', result);

//5~6
var person = {};

person['age'] = 20;
person['name'] = 'sookim';

var oper = function(a,b){
    return a+b;
};

person['add'] = oper;

console.log('더하기 : %d', person.add(10,10));
*/
//7
var person = {
    age : 20,
    name : 'sookim',
    add: function(a,b){
        return a+b;
    }
};
console.log('더하기 : %d', person.add(10,10));