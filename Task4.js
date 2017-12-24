function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  console.log('Суммирование аргументов ' + sumArgs(1, 2, 3));

  function applyAll(func){
      return func.apply(this, [].slice.call(arguments, 1));
  }

  console.log('Примените функцию к аргументам ' + applyAll(Math.max, 2, -2, 3) );