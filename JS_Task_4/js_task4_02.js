function titleChar(str){
    return str[0].toUpperCase()+str.substr(1, str.length-1);
}
var str = 'hello';
console.log(titleChar(str));
