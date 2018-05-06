//http://es6-features.org/#CustomInterpolation
//tested in nodeJS v8.9.4 on MacOS

function get(url, ...ar) {
    console.log(url); // [ 'http://example.com/', '&parm3=', '' ]
    console.log(ar); // [ '1', '2', '3' ]
}
var parm1 = '1';
var parm2 = '2';
var parm3 = '3';
get `http://example.com/?parm1=${parm1}&parm2=${parm2}&parm3=${parm3}`;

//really hard to imagine where use it...