//http://es6-features.org/#RawStringAccess
//tested in nodeJS v8.9.4 on MacOS


var string1 = `some text and br... \n second line`;
var string2 = "some text and br... \n second line";
var string3 = 'some text and br... \n second line';
console.log(string1); //some text and br...//second line (displays in two lines)
console.log(string2); //some text and br...//second line (displays in two lines)
console.log(string3); //some text and br...//second line (displays in two lines)

console.log(String.raw `${string1}`); //some text and br...//second line (displays in two lines)
console.log(String.raw `${string2}`); //some text and br...//second line (displays in two lines)
console.log(String.raw `${string3}`); //some text and br...//second line (displays in two lines)

console.log(String.raw `some text and br... \n second line`); //some text and br... \n second line
console.log(String.raw `some text and br... \n\r second line`); //some text and br... \n\r second line
console.log(String.raw `some text and "br"... \n\r 'second' line`); //some text and "br"... \n\r 'second' line

console.log("some text and \"br\"... \n\r\t 'second' line"); //some text and "br"...//'second' line (displays in two lines and with tab)
console.log(String.raw `some text and "br"... \n\r\t 'second' line`); //some text and "br"... \n\r\t 'second' line

console.log('\uD834'); //�
console.log(String.raw `\uD834`); //\uD834

console.log('🤠'); //🤠
console.log(String.raw `🤠`); //🤠

