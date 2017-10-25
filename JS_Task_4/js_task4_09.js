function arrayTable(rows, cols){
    var newArray = new Array(rows);
    for(var i=0; i < rows; i++) {
      newArray[i] = new Array(cols);
      for(var j=0; j < cols; j++) {
          newArray[i][j] = '';
        }
    }
    return newArray;
  }

function unique(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}



function collChar(str){
     var arrCharr = [];
     var arrCharrEnd = arrayTable(str.length, 2);

     for (var i = 0; i < str.length; i++){
        arrCharr[i] = str[i];
     }
     var col = 0;
     for(var i = 0; i< arrCharr.length; i++){
       col = 0;
       for(var j = 0; j< arrCharr.length; j++){
           if(arrCharr[j]==arrCharr[i]){
               col++;
           }
       }
       arrCharrEnd[i][0] = arrCharr[i];
       arrCharrEnd[i][1] = col;   
     }
     console.log(unique(arrCharrEnd));
}

collChar('hello');