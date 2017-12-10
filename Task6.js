function work(a) {}
  
  function makeLogging(f, log) {
  
    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
      }
  
    return wrapper;
  }
  
  var log = [];
  work = makeLogging(work, log);
  
  work(1);
  work(5); 
  
  for (var i = 0; i < log.length; i++) {
    console.log( 'Лог:' + log[i] );
  }
 ///////////////////////////////////////////////
  function f(x) {
    return Math.random()*x;
  }
  
  function makeCaching(f) {
    var cache = {};
  
    return function(x) {
      if (!(x in cache)) {
        cache[x] = f.call(this, x);
      }
      return cache[x];
    };
  
  }
  
  f = makeCaching(f);
  
  var a = f(1);
  var b = f(1);
  alert( a == b ); 
  b = f(2);
  alert( a == b ); 