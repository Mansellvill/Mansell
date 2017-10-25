function lenghtString(str, leng){
    if(str.length > leng){
        return str.substr(0, leng-3) + '...';
    }
    else{
        return str;
    }
}

var newStr = lenghtString('hello world', 8);
console.log(newStr);