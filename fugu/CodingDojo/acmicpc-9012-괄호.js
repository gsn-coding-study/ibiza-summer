const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
});

function argc() {
  return new Promise(res => {
    rl.on('line', line => res(line));
  });
}

function argv(argc) {
  let args = [];
  return new Promise(res => {
    rl.on('line', line => {
      if (argc <= args.push(line)) {
        rl.close();
        res(args);
      }
    });
  });
}

function isVPS(ps) {
  let stack = [];
  for (let s of ps) {
    switch (s) {
      case '(':
        stack.push(s);
        break;
      case ')':
        if (!stack.pop()) return 'NO';
        break;
      default:
        return 'NO';
    }
  }
  return (0 === stack.length) ? 'YES' : 'NO';
}

argc()
  .then(argv)
  .then(args => {
    console.log(args.map(isVPS).join('\n'));
  });