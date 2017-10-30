function addStr(str, strAdd, numStr){
    var arrStr = str.split(' ');
    var strEnd = '';

    if(arrStr.length < numStr) {
        return strEnd = str + ' ' + strAdd;
    }
    else{
        for(var i = 0; i< arrStr.length; i++){
            strEnd += arrStr[i] + ' ';
            if(i == numStr) {
                strEnd += strAdd + ' ';
            }             
        }
    return strEnd.trim();
    }
}

var newStr = addStr('I am cool', 'very', 1);
console.log(newStr);