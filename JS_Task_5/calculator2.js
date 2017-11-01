function calculator(){
    var firstNumber = 0;
    var calculator = {
        sum: function (){
            firstNumber += arguments[0]; 
            
            function sumPlus() { 
                firstNumber += arguments[0]; 
                return sumPlus; 
            } 

            sumPlus.toString = function() { 
            return firstNumber; 
            }           
            return sumPlus;     
        },
        subtract: function(){

            firstNumber -= arguments[0]; 
            function  subPlus() { 
                firstNumber -= arguments[0]; 
                return  subPlus; 
            } 

            subPlus.toString = function() { 
            return firstNumber; 
            }
            
            return  subPlus;     
        },
        divide: function(){
            if(arguments[0]!==0){
                firstNumber /= arguments[0];
                function divPlus() { 
                    if(arguments[0]!==0){
                        firstNumber /= arguments[0]; 
                        return divPlus;
                    }
                    else{
                         console.log('Делить на 0 нельзя!!!');
                    }
                    }

                    divPlus.toString = function() { 
                    return firstNumber; 
                    }
                    return  divPlus;
            }        
              
            console.log('Делить на 0 нельзя!!!');
            arguments[0] = 1;
            
            firstNumber /= arguments[0];
            function divPlus() { 
                if(arguments[0]!==0){
                    firstNumber /= arguments[0]; 
                    return divPlus;
                }
                else{
                     console.log('Делить на 0 нельзя!!!');
                }
                }

                divPlus.toString = function() { 
                return firstNumber; 
                }
                return  divPlus;

                  
        },
        multiply: function(){
            firstNumber *= arguments[0]; 
            
            function mulPlus() { 
                firstNumber *= arguments[0]; 
                return mulPlus; 
            } 

            mulPlus.toString = function() { 
            return firstNumber; 
            }           
            return mulPlus;     
        },
        getResult: function(){          
            return firstNumber;
        },
        reset: function(){            
            firstNumber = 0;
        }
    };

    return calculator;
}

var cal = calculator();

console.log(cal.getResult());
cal.sum(10)(14);
console.log(cal.getResult());
cal.subtract(2)(2);
console.log(cal.getResult());
cal.divide(2)(0);
console.log(cal.getResult());
cal.multiply(2)(5);
console.log(cal.getResult());
cal.reset();
console.log(cal.getResult());

