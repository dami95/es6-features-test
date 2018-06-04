//tested in nodeJS v8.9.4 on MacOS

var arr1 = [1,2,3];
console.log(arr1.reduce(function (a,b) {
    return a + b;
})); //6
console.log(arr1); // [ 1, 2, 3 ]


var arr2 = ['a','b','c'];
console.log(arr2.reduce(function (a,b) {
    return a + ',' + b;
})); //a,b,c
console.log(arr2); // [ 'a', 'b', 'c' ]

console.log('---');

Array.prototype.ownReduce = function(call) {
    var array = this.slice();
    var copy = array.slice();
    for (var i = 0; i < copy.length-1; i++) {
        copy[i+1] = call(copy[i], copy[i+1], i+1, array)
    }
    return copy[i];
};

console.log(arr1.ownReduce((a,b) => a+b)); //6
console.log(arr2.ownReduce((a,b) => a + ',' + b)); //a,b,c

arr1.ownReduce(function(a,b,c,d) {
    console.log('Index', c); //Index 1 //Index 2
    console.log('Array', d); //Array [ 1, 2, 3 ] // Array [ 1, 2, 3 ]
});