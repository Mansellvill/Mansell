function checkArr(arr){
    var firsElement  = arr[0];
    var check = true;
    for(var i = 1; i < arr.length; i++){
        if (firsElement != arr[i]) { 
            check = false;
            break;
        }
    }
    if(check) console.log('true');
    else console.log('false'); 
}

var arr1 =  [3,3,3,3,3];
var arr2 =  [3,3,2,3,3];
var arr3 =  [1,1,1,1,2];
var arr4 =  [100,100,100,100,100];
checkArr(arr1);
checkArr(arr2);
checkArr(arr3);
checkArr(arr4);