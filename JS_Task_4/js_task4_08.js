function invert(str){
    var strInvert = '';
    for(var i =  str.length-1 ; i >= 0; i--){
        strInvert += str[i];
    }
    return strInvert;
}

function invertStr(str){
    var arrStr = str.split(' ');
    var strInvertEnd = '';
    for(var i =  arrStr.length-1 ; i >= 0; i--){
        strInvertEnd += invert(arrStr[i]) + ' ';
    }
    return strInvertEnd.trim();
}

var strInvert = invertStr('Hello world!!!');
console.log(strInvert);