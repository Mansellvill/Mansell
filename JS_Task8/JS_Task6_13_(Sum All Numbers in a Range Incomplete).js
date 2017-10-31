function sumAll(arr) {
    var sum =0;
    for (var i = Math.min(...arr); i<= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
  }

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

  