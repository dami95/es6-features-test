//http://es6-features.org/#StringInterpolation
//tested in nodeJS v8.9.4 on MacOS

var text = 'Hey';
var me = {
    surname: 'Damian',
    lastname: 'Lewita',
    birth: 1995,
    age: function() {
        return new Date().getFullYear() - this.birth;
    }
};
console.log(`${text} ${me.surname} ${me.lastname} - birth ${me.birth} - age ${me.age()}`);

var profile = 'dami95';

var fb = `https://www.facebook.com/${profile}`;
console.log(fb); //https://www.facebook.com/dami95

var github = `https://github.com/${profile}`;
console.log(github); //https://github.com/dami95

var apikeys = {key: Math.floor(Math.random()*100000), hash: Math.random().toString(36).substr(2, 10)}
var apiUrl = `https://api.service.com/${apikeys.key}/${apikeys.hash}`;
console.log(apiUrl); //eg. https://api.service.com/43687/nh4eq8xvil