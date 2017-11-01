function largesOfFour(arr){
    var newArr = [];
    for(var i =0; i<arr.length; i++){
        var max =arr[i][0]; 
        for(var j =0; j<arr[i].length; j++){
            if(max< arr[i][j]) max = arr[i][j];
        }
        newArr.push(max);
        }
    return newArr;   
}

var arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(largesOfFour(arr));
console.log(largesOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
