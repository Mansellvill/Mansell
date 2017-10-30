function rand(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}

console.log(rand(0, 10));
console.log(rand(-10, 0));
console.log(rand(20, 25));