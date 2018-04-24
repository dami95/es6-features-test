//after few days break...
//http://es6-features.org/#ExpressionBodies
//tested in nodeJS v8.9.4 on MacOS


var arr = [1,2,3,4,5,6,7,8,9,10];

// * one parameter and return boolean
var odd = arr.filter(i => i%2); //[ 1, 3, 5, 7, 9 ]
var even = arr.filter(i => i%2 == 0); //[ 2, 4, 6, 8, 10 ]

// * one parameter and return object
var objects = arr.map(i => ({number: i, text: 'number'+i}));
console.log(objects);

// * two parameters and return sum
var sum = arr.reduce((a,b) => a+b); // 55

// * two parameters and return string (it's like .join(', '))
var string = arr.reduce((a,b) => a+','+b); // 1,2,3,4,5,6,7,8,9,10
console.log(arr.join(',')); //1,2,3,4,5,6,7,8,9,10

// * arrow function in nodeJS events
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => console.log(a,b)); // 1 2
myEmitter.emit('event', 1, 2);

// * array?
const myEmitter2 = new EventEmitter();
myEmitter2.on('event', arguments => console.log(arguments)); // [1,2,3,4]
myEmitter2.emit('event', [1, 2, 3, 4]);
