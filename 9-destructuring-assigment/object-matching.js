//http://es6-features.org/#ObjectMatchingShorthandNotation
//tested in nodeJS v8.9.4 on MacOS

// * destructuring objects
let result = {status: 1, message: 'Success!', data: {id: 9231}};
let { status, message, data } = result;
let { resultId } = data;
console.log(status, message, data, resultId); //1 'Success!' { id: 9231 } 9231
console.log(result.status, result. message, result.data, result.data.id); //1 'Success!' { id: 9231 } 9231

// * changing names of variables
let { status: resultCode, message: messageResult } = result;
console.log(resultCode, messageResult); //1 'Success!'

// * deep destructuring
let result2 = {status: 200, data: {id: 123, title: 'Hello', description: 'Hello World'}};
let { data: { id, title, description: desc } } = result2;
console.log(id, title, desc); // 123 'Hello' 'Hello World'

// * destructuring objects with default parameters
let result3 = {data: {title: 'Hello2'}}
let { data: {id: id2 = false}} = result2;
let { data: {id: id3}} = result3;
let { data: {id: id4 = false}} = result3;
console.log(id2, id3, id4); //123 undefined false

// * destructuring array with default parameter
let ar = [1,2,3];
let [a1, a2, a3, a4] = ar;
let [b1, b2, b3, b4 = 4] = ar;
console.log(a4, b4); //undefined 4

// * destructuring array in functions
let ajaxResult = {status: 1, ids: [90, 50, 60]}
let handleArray = ({ids : [ firstId, secondId, thirdId]}) => {
    console.log(firstId, secondId, thirdId); // 90 50 60
};
handleArray(ajaxResult);

// * destructuring object in functions
let handleData = ({id, id: x}) => {
    console.log(id, x); // 9231 9231
};
handleData(data);
