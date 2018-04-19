//http://es6-features.org/#BlockScopedFunctions

// * let's start
var foo = function() { console.log('a'); }
foo(); //a
{
  foo(); //a
  var foo = function() { console.log('b'); }
  foo(); //b
}

// * try...
foo(); //b
{
  foo(); //b
  var foo = function() { console.log('b'); }
  foo(); //b
}

// * let's try without function expression
function foo2() { console.log('c'); }
foo2(); //c
{
  foo2(); //d
  function foo2() { console.log('d'); }
  foo2(); //d
}
foo2(); //d


// * now should be working
{
  function foo3() { console.log('e'); }
  foo3(); //e
  {
    foo3(); //f
    function foo3() { console.log('f'); }
    foo3(); //f
  }
  foo3(); //e - perfect!
}

// * with function expression
{
  var foo4 = function() { console.log('g'); }
  foo4(); //g
  {
    foo4(); //g
    var foo4 = function() { console.log('h'); }
    foo4(); //h
  }
  foo4(); //h - oh no!!
}

// * let's test old style
(function() {
  var foo5 = function() { console.log('i'); }
  foo5(); //i

  (function() {
    // foo5(); //foo5 is not a function
    var foo5 = function() { console.log('j'); }
    foo5(); //j
  })();
  foo5(); //i
})();

// * let's test old style - withour function expression
(function() {
  function foo6() { console.log('k'); }
  foo6(); //k

  (function() {
    // foo6(); //foo6 is not a function
    var foo6 = function() { console.log('l'); }
    foo6(); //l
  })();
  foo6(); //k - YEAH
})();
