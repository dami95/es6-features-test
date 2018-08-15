//http://es6-features.org/#ArrayMatching
//tested in nodeJS v8.9.4 on MacOS

//* destructuring arrays
let list = [1,2,3,4];
let [a,b] = list;
let [,,c,d] = list;
let [,,,e] = list;
console.log(a, b); //1 2
console.log(c, d); //3 4
console.log(e); //4

//*swap values of variables
let n1 = 10, n2 = 30;
console.log(n1, n2); //10 30
[n1, n2] = [n2, n1];
console.log(n1, n2); //30 10


//* old way
let f = list[0], g = list[1];
let h = list[list.length - 1];
console.log(f, g, h); //1 2 4

let tmp = f;
f = g;
g = tmp;
console.log(f, g); //2 1
