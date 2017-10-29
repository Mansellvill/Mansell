function repeatStringNumTimes(str, num) {
    if(num>0) return str.repeat(num);
    return 'Число должно быть болльше 0!!!';
}

console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('abc', 4));
console.log(repeatStringNumTimes('Привет', 1));
console.log(repeatStringNumTimes('*',8));
console.log(repeatStringNumTimes('*', 0));
console.log(repeatStringNumTimes('abc', -2));
