function evenOddValue(arr){
    var numberEven = 0, numberOdd = 0, numberZero = 0;
    
    for (var i = 0; i<arr.length; i++){
        if(arr[i]==0) numberZero++;
        else if(arr[i]%2 == 0) numberEven++;
        else numberOdd++;
    }
    console.log('Число чётных чисел: '+ numberEven + ' Число нечетных: '+ numberOdd + ' Нулей: ' + numberZero);
}

var arr = [10, 11, 0, 12, 11, 4, 9, 0, 5]; 
evenOddValue(arr);