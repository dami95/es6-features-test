//tested in nodeJS v8.9.4 on MacOS

console.log('Math.PI', Math.PI);

// * declare constans PI
const PI = 3.141593;
console.log('PI = ', PI);


// * redeclare? - not possible, it's constans :)
// const PI = Math.PI; //Identifier 'PI' has already been declared


// * small letters? - possible
const pi = Math.PI;
console.log('pi =', pi);


// * create variable with the same name? - not possible
//var pi = Math.PI; // Identifier 'pi' has already been declared


// * create local variable with the same name? - not possible
// let pi = Math.PI; // Identifier 'pi' has already been declared


// * access to constans in IIFE - possible
(function() {
  console.log('PI in IIFE = ', PI);
  console.log('pi in IIFE = ', pi);
})();


// * redeclare constans in IIFE - possible
(function() {
  // console.log('before redeclare - pi in IIFE', pi); //"pi is not defined" - hmm... hoisting?

  const pi = 10;
  console.log('redeclare pi in IIFE', pi);
})();
console.log('pi after IIFE = ', pi);


// * create variable with the same name in IIFE? - possible
(function() {
  console.log('start - variable pi in IIFE = ', pi); //pi = undefined - hoisting

  var pi = 3; //:devil:
  console.log('variable pi in IIFE = ', pi);
})();
console.log('pi after IIFE = ', pi);


// * create local variable with the same name in IIFE? - possible
(function() {
  // console.log('start - local variable pi in IIFE = ', pi); //"pi is not defined" - hmm... hoisting?

  let pi = 4; //:devil:
  console.log('local variable pi in IIFE = ', pi);
})();
console.log('pi after IIFE = ', pi);


// * declare contans inside IIFE
(function() {
  const GOLDEN = 1.6;
  console.log('constans inside IIFE - GOLDEN = ', GOLDEN);
})();
// console.log('constans after IIFE - GOLDEN = ', GOLDEN); //"GOLDEN is not defined"

// * old style
Object.defineProperty(typeof global === "object" ? global : window, "E", {
    value: 2.718281828459,
    enumerable: true,
    writable: false,
    configurable: false
});
console.log('E =', E);

// * mix old style and new
// const E = 2; //"E is not defined"

// * old style in IIFE
(function() {
  Object.defineProperty(typeof global === "object" ? global : window, "E", {
      value: 2.718281828459, // another value cause "Cannot redefine property: E"
      enumerable: true,
      writable: false,
      configurable: false
  });
}());

//* enough...
