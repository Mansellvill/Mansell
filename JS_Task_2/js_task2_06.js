function simpleOrCompositeNumber(number){
    if(number >1000) console.log('Неверное значние!!!');
    else{
        if(number != 2 && number %2 == 0 ){
            console.log('Число ' + number + ' составное!!!');
        }
        else if(number == 2){
            console.log('Число '+ number + ' простое!!!');
        }
        else{
         console.log('Число '+ number +' простое!!!');
        }

    }
    
}
var value1 = 1001;
var value2 = 666;
var value3 = 13;
var value4 = 14;
var value5 = 5;
simpleOrCompositeNumber(value1);
simpleOrCompositeNumber(value2);
simpleOrCompositeNumber(value3);
simpleOrCompositeNumber(value4);
simpleOrCompositeNumber(value5);