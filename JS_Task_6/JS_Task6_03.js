function findLongestWorld(str){
    var maxNum = 0;
    str = str.trim();
    var arr = str.split(/[\s]/);
    var arrLength = arr.map(function(num){ return num.length;});
    console.log(arr);
    console.log(arrLength);
    arrLength.forEach(function(num, i, arr){ if(num>maxNum) maxNum = num;})
    return maxNum;
}
var leng = findLongestWorld('Debugging with legacy protocol ');
console.log(leng);