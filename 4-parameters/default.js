//http://es6-features.org/#DefaultParameterValues
//tested in nodeJS v8.9.4 on MacOS

// * old style
function pow(a, b) {
  if (typeof b !== "number")
    b = 2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}

console.log(pow(3)); // 9
console.log(pow(3,3)); // 27
console.log(pow(3,4)); // 81

// * using default parameter
function pow2(a, b = 2) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}
console.log(pow2(3)); // 9
console.log(pow2(3,3)); // 27
console.log(pow2(3,4)); // 81
