// EventEmitter 객체를 생성
var custom = new process.EventEmitter();

// 이벤트 연결
custom.on('tick', function(code){
    console.log('이벤트를 실행합니다^_^');
});

// 이벤트를 강제로 발생시킵니다.
custom.emit('tick');