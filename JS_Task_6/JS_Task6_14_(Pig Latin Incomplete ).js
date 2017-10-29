function translatePigLatin(str) {
    if(typeof str  === 'number'){console.log('Вводное чилсо должно быть строкой!!!'); return str;}
    var concordant = 'BCDFGHJKLMNPQRSTVWXYZ'.toLocaleLowerCase().split('');
    var vowels = 'AEIOU'.toLocaleLowerCase().split('');
    var strArray = str.toLocaleLowerCase().split('');
    
    if(vowels.indexOf(strArray[0])> -1) {
        return strArray.join('')+ 'way';
    }
    else{
        while(concordant.indexOf(strArray[0]) > -1){
            strArray.push(strArray.shift())
        }
        return strArray.join('')+ 'ay';
    }
}

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin(13));
