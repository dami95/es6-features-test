//http://es6-features.org/#Lexicalthis
//tested in nodeJS v8.9.4 on MacOS

// * echo this
console.log(this); // {}

// * create array in this object
this.array = [1,2,3];
console.log(this);

// * try to display array in function
this.array.forEach(function (v) {
  console.log(this.array); //undefined
});

// * the same with self
var self = this;
this.array.forEach(function (v) {
  console.log(self.array); //[1, 2, 3]
});

// * with thisArg (https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/forEach)
this.array.forEach(function (v) {
  console.log(this.array); //[1, 2, 3]
}, this);

// * the same with function and bind
this.array.forEach(function (v) {
  console.log(this.array); //[1, 2, 3]
}.bind(this));

// * arrow function context
this.array.forEach((v) => {
  console.log(this.array); //[1, 2, 3]
});
