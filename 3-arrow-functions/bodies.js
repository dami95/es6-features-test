//http://es6-features.org/#StatementBodies
//tested in nodeJS v8.9.4 on MacOS

// * arrow function in events
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
var happens = myEmitter.on('event', (a, b) => {
  console.log(a,b); // 1 2
});
myEmitter.emit('event', 1, 2);

// * function expression
var hello = () => {
  console.log('Hello!');
};
hello();

// * function expression with parameter
var hello2 = a => {
  console.log('Hello' + a + '!');
};
hello2(2);

// * function expression with parameter in ()
var hello3 = (a) => {
  console.log('Hello' + a + '!');
};
hello3(3);

// * function expression with parameters
var hello4 = (a, b) => {
  console.log('Hello' + a + b + '!');
};
hello4(4,5);

// * arguments array in function
var args1 = function() {
  console.log(arguments); //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
};
args1(1,2,3,4,5);

// * arguments in arrow functions
var args2 = () => {
  console.log(arguments); // ??
  console.log(arguments[0]); // ??
  console.log(arguments[1]); // ?? ..
};
args2(1,2,3,4,5);

// * arguments in arrow functions
var args3 = (...arguments) => {
  console.log(arguments); // [ 1, 2, 3, 4, 5 ]
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
};
args3(1,2,3,4,5);
