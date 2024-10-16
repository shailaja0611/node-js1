const amount = 12;
if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log('hey its my first node app');

function addnumber(a, b) {
  console.log(a, b);
}
addnumber(150, 250);

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.freemem());
console.log(os.cpus());

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

const john= 'johan'
const peter= 'peter'

const sayHi = (name) =>{
    console.log('Hello there ${name}')
}
sayHi('susan')
sayHi(john)
sayHi(peter)


