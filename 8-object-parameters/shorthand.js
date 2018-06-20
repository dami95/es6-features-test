//http://es6-features.org/#PropertyShorthand
//tested in nodeJS v8.9.4 on MacOS
var a = 1;
var b = 2;

var ob = {a: a, b: b};
console.log(ob); //{ a: 1, b: 2 }

var ob2 = {a, b};
console.log(ob2); //{ a: 1, b: 2 }



var name = 'Damian';
var surname = 'Lewita';
var me = {name, surname};
console.log(me);  //{ name: 'Damian', surname: 'Lewita' }



var hello = () => {
    console.log('Hello!');
}
var hi = () => {
    console.log('Hi!');
}
function hey() {
    console.log('Hey!');
}
var functions = {hello, hi, hey};
console.log(functions); //{ hello: [Function: hello], hi: [Function: hi], hey: [Function: hey] }
functions.hello();
functions.hi();
functions.hey();