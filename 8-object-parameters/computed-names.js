//http://es6-features.org/#ComputedPropertyNames
//tested in nodeJS v8.9.4 on MacOS

var id = () => 23;

var cache = {
    id: id(),
    name: 'Damian'
};
console.log(cache); //{ id: 23, name: 'Damian' }

var keyId = () => 'id';
var keySurname = 'surname';
var cache2 = {
    [ keyId() ]: id(),
    name: 'Damian',
    [ keySurname ]: 'Lewita'

};
cache2['user_' + keyId()] = id();
console.log(cache2); //{ id: 23, name: 'Damian', surname: 'Lewita', user_id: 23 }



