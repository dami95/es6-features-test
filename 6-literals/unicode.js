//http://es6-features.org/#UnicodeStringRegExpLiteral
//tested in nodeJS v8.9.4 on MacOS

console.log('a'.length); //1
console.log('ą'.length); //1
console.log('😅'.length); //2

console.log("ą".match(/./u)[0].length); //1
console.log("😅".match(/./u)[0].length); //2

console.log('😅' == '\ud83d\ude05'); //true (JavaScript escape - https://www.charbase.com/1f605-unicode-smiling-face-with-open-mouth-and-cold-sweat)
console.log('😅' == '\ud83d\ude02'); //false
console.log('😅' == '\u{1F605}'); //true (index - https://www.charbase.com/1f605-unicode-smiling-face-with-open-mouth-and-cold-sweat)
console.log('😅' == '\u{1F601}'); //false

console.log('😅'.codePointAt(0)); //128517 - return index
console.log('😅'.codePointAt(0) == '0x1F605'); //true (0x1F605 == 128517)

for (let codepoint of "😅") console.log(codepoint)
