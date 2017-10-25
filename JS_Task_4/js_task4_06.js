function titleChar(str){
    return str[0].toUpperCase()+ str.substr(1, str.length-1).toLowerCase();
}

function camelCase(str){
    var arrStr = str.split(' ');
    var strCamelCase = arrStr[0].toLowerCase();
    for(var i = 1; i < arrStr.length; i++){
       strCamelCase += titleChar(arrStr[i]);
    }
    return strCamelCase;
}

var newStrCamelCase = camelCase('User ObjEct nAme');
console.log(newStrCamelCase);