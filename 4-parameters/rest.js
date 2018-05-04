//http://es6-features.org/#RestParameter
//tested in nodeJS v8.9.4 on MacOS

// * es6 arguments
function sum(...numbers) {
  console.log(numbers); // [1, 2, 3, 4]

  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sum(1,2,3,4)); //10


// * old style
function sum2() {
  console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4 }

  var result = 0;
  for (var el in arguments) {
    result += arguments[el];
  }
  return result;
}
console.log(sum2(1,2,3,4)); //10


// * old style - object to array
function sum3() {
  var numbers = Array.prototype.slice.call(arguments);
  console.log(numbers); // [ 1, 2, 3, 4 ]

  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sum3(1,2,3,4)); //10
