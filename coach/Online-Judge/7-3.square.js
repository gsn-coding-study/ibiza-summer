var read = require('read');

read({ prompt : 'Username: ' }, function (err, user) {
  read({ prompt : 'Password: ', silent : true }, function (err, pass) {
    console.log(user, pass);
    process.stdin.destroy();
  });
})
