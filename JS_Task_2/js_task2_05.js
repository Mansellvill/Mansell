function maxValue (arr){
    var maxValue = arr[0];
    for(var i = 0; i< arr.length; i++){
        if(maxValue < arr[i]) maxValue = arr[i];
    }
    console.log('Максимальный элемент массива: ' + maxValue);
}
var arr1 = [10, 23, -1, 32, 3];
var arr2 = [43, -100, 73, 13, 144];
var arr3 = [228, 15, -11, 100, 227];
maxValue(arr1);
maxValue(arr2);
maxValue(arr3);