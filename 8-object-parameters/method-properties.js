//tested in nodeJS v8.9.4 on MacOS

var obj = {
    name: 'Damian',

    hello: () => {
        console.log('Hello ' + obj.name); //"this" is not working! - https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
    },
    hey: function() {
        console.log('Hey ' + this.name);
    },
    bye(text) {
        console.log(text + ' ' + this.name); //it's working!
    },
    *generator() {
        var index = 0;
        while (true)
            yield index++;
    }
};
obj.hello(); //Hello Damian
obj.hey(); // Hey Damian
obj.bye('BYE'); //BYE Damian

var gen = obj.generator(); //@TOLEARN
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1