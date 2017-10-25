function typeValue (value){
    if(typeof value == 'number'){
        console.log(value + ' - Это число!!!');
    }
    else if(typeof value == 'string'){
        console.log(value + ' - Это строка!!!');
    }
    else {
        console.log(value + ' - Что это такое???');
    }
}

var arr = [34, 'Привет', 1E3, 'node.js', null, undefined];
for (var i = 0; i< arr.length; i++){
    typeValue(arr[i]); 
}
