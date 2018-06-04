//http://es6-features.org/#BinaryOctalLiteral
//tested in nodeJS v8.9.4 on MacOS

// * binary
console.log(0b01); //1
console.log(0b11); //3
console.log((0b11 + 0b01)); //4

// * oct
var a = 0o001;
var b = 0o012;
console.log(a); //1
console.log(b); //10
console.log(a+b); //11

// * hex
var c = 0x00A;
var d = 0x00F;
console.log(c); //10
console.log(d); //15
console.log(c+d); //25
console.log((c+d).toString(16)); //19 === 0x19


//* old style
console.log(parseInt('01', 2) + parseInt('11', 2)); //4
console.log(parseInt('001', 8) + parseInt('012', 8)); //11
console.log(parseInt('00A', 16) + parseInt('00F', 16)); //25