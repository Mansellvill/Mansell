function palindrome(str){
    var newStrRep = '';
    var newStr = str.replace(/[\W_]/g, '').toLowerCase();
    for(var i = newStr.length-1; i >= 0 ;i--){
        newStrRep += newStr[i];         
    }
    if(newStr == newStrRep) return true;
    else return false;  
   

}

if(palindrome('E:y__E')) console.log('true');
else console.log('false');

if(palindrome('raCe car')) console.log('true');
else console.log('false');

if(palindrome('1 eye for of 1 eye.')) console.log('true');
else console.log('false');

if(palindrome('O_O (: /-\ :) O-O')) console.log('true');
else console.log('false');

