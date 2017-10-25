function rot13(str) { // LBH QVQ VG!
    var newStr = '';
    var arrUniCode = [];

    for(var i = 0; i< str.length; i++){
        arrUniCode[i] =  str[i].charCodeAt();     
    }

    for(var i = 0; i< arrUniCode.length; i++){
        if(arrUniCode[i] >= 65 && arrUniCode[i] < 78) arrUniCode[i] = arrUniCode[i] + 13;  
        else if(arrUniCode[i] >= 78 && arrUniCode[i] <= 90)  arrUniCode[i] = arrUniCode[i] - 13;       
    }

    for(var i = 0; i< arrUniCode.length; i++){
        newStr += String.fromCharCode(arrUniCode[i])   
    }

   return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));

  