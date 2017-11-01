function factorialize(num){
    var factorial = 1;
    for(var i = 1; i<=num; i++){
        factorial *=i;
    }
    return factorial;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));