function sum(a){
    var sum = a;

    function newSum(b){
        sum +=b;
        return newSum;
    }

    newSum.toString = function(){
        return sum;
    };

    return newSum;
}

console.log(sum(1)(2).toString());
console.log(sum(1)(2)(10).toString());