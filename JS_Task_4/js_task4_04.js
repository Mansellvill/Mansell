function titleChar(str){
    return str[0].toUpperCase()+str.substr(1, str.length-1);
}


function toUpper(str){
    var arrStr = str.split(' ');
    var arrStrEnd = '';
    for (var i =0; i < arrStr.length;i++ ){
        arrStr[i] =  titleChar(arrStr[i]);
        arrStrEnd += arrStr[i] + ' ';       
    }
    return arrStrEnd.trim();
}
 var a = toUpper('Привет, как дела?');
 console.log(a);
