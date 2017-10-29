function destroyer(arr) {
    var arrArg = Array.prototype.slice.call(arguments, 1);
    for(var i = 0; i< arrArg.length; i++){
        for(var j = 0; j< arr.length; j++){
            if(arrArg[i] === arr[j]) delete arr[j];
        }
    }
    return arr.filter(Boolean);
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2,3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
