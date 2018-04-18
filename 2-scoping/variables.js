//http://es6-features.org/#BlockScopedVariables
//tested in nodeJS v8.9.4 on MacOS

// * normal var
var one = 1;
console.log(one); //1

// * let
let two = 2;
console.log(two); //2

// * var again
console.log(three);
var three = 3; //undefined

// * let again
//console.log(four); //"four is not defined"
let four = 4;

// * try to redefine var
var one = 11; //LOL, not big deal :)
console.log(one); //11

// * try to redeclare let
//let two = 22; //"Identifier 'two' has already been declared"

// * try to redefine
two = 22;
console.log(two); //22


// * print var and let in IIFE
(function() {
  console.log(three); // 3
  console.log(four); // 4
})();


// * create var in IIFE
(function() {
  console.log(three); //undefined
  var three = 33;
  console.log(three); //33
})();
console.log(three); //3


// * create let in IIFE
(function() {
  //console.log(four); //"four is not defined"
  let four = 44;
  console.log(four); //44
})();
console.log(four); //4


// * loop with var in IIFE
(function() {
  for (var i = 0; i < 2; i++) {
    var message = 'test';
  }
  console.log(message); //test
  console.log(i); //2
})();


// * loop with let in IIFE
(function() {
  for (let i = 0; i < 2; i++) {
    let message = 'test';
  }
  // console.log(i); //"i is not defined"
  // console.log(message); //"message is not defined"
})();


// * loop and functions (old style)
var callbacks = [];
for (var i = 0; i < 2; i++) {
  callbacks[i] = function() { console.log(i); }
}
callbacks[0](); //2
callbacks[1](); //2


// * loop and functions (fixed - old style)
var callbacks = [];
for (var i = 0; i < 2; i++) {
  (function(i) {
    callbacks[i] = function() { console.log(i); }
  })(i)
}
callbacks[0](); //0
callbacks[1](); //1


// * loop and functions (using let)
var callbacks = [];
for (let i = 0; i < 2; i++) {
    callbacks[i] = function() { console.log(i); }
}
callbacks[0](); //0
callbacks[1](); //1
