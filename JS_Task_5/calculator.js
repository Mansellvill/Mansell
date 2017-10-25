function calculator(firstNumber){
    var calculator = {
        sum: function(){
            var sum = firstNumber;
            for(var i = 0; i<arguments.length;i++){
                sum = sum + arguments[i];
            }
            return sum;
            
        },
        dif: function(){
            var dif = firstNumber;
            for(var i = 0; i<arguments.length;i++){
                dif = dif - arguments[i];
            }
            return dif;
        },
        div: function(){
            var div = firstNumber;
            for(var i = 0; i<arguments.length;i++){
                if(arguments[i]!==0){
                    div = div / arguments[i];
                }
                else{
                    console.log('Делить на 0 нельзя!!!');
                }
            }
            return div;
        },
        mul: function(){
            var mul = firstNumber;
            for(var i = 0; i<arguments.length;i++){
                mul = mul * arguments[i];
            }
            return mul;
        }
    };

    return calculator;
}

var cal = calculator(100);

console.log(cal.sum(2,2));
console.log(cal.dif(2,2));
console.log(cal.div(2,0));
console.log(cal.mul(2,2,3));