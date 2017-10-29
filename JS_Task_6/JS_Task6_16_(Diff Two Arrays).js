function diffArray(arr1, arr2) {

    var newArr = [];
     
    function CheckingTheSame(arr1, arr2){
        for(var i =0; i< arr1.length; i++){
            if(arr2.indexOf(arr1[i]) === -1){
                newArr.push(arr1[i]);
            }
        }
    }

    CheckingTheSame(arr1,arr2);
    CheckingTheSame(arr2,arr1);
   
    return newArr;
  }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

