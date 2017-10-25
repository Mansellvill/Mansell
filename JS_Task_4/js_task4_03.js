function searchStr(str, strSearch){
    if(str.toLowerCase().search(strSearch.toLowerCase())!= -1) return true;
    else return false;
}

console.log(searchStr('Hello world', 'World'));

