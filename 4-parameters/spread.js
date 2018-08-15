//http://es6-features.org/#SpreadOperator
//tested in nodeJS v8.9.4 on MacOS

// * concat arrays
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1, ...arr2, ...arr2];
console.log(arr3); //[ 1, 2, 3, 4, 5, 6, 4, 5, 6 ]

// * string to array
var name = 'Damian';
console.log(name.split('')); // [ 'D', 'a', 'm', 'i', 'a', 'n' ]
console.log([...name]); // [ 'D', 'a', 'm', 'i', 'a', 'n' ]


// * function parameter
var arr4 = [1,2,3];
function sum(...params) {
    console.log(params);
}
sum(arr4); //[ [ 1, 2, 3 ] ]
sum(3,4); //[ 3, 4 ]

function sum2(...params) {
    console.log(params);
    console.log(params.reduce((i, j) => i + j));
}
sum2(...arr4); //[ 1, 2, 3 ] - sum: 6
sum2(3,4); //[3, 4] - sum: 7

// * two parameters and ...args
function calculate(sign, ...args) {
    if (!['+', '-', '*', '/', '%'].includes(sign)) {
        return false;
    }
    return args.reduce((a,b) => eval(a+sign+b));
}
console.log(calculate('+', 1,2,3,4)); //10
console.log(calculate('-', 1,2,3,4)); //-8
console.log(calculate('--', 1,2,3,4)); //false

/*
// * two parameters and ...args
function calculate(...args, sign) { //SyntaxError: Rest parameter must be last formal parameter
    return args.reduce((a,b) => eval(a+sign+b));
}
console.log(calculate(1,2,3,4, '+',));
console.log(calculate(1,2,3,4, '-',));
*/