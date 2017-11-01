function slasher(arr, howMany) {
    return arr.slice(howMany);

  }
  
  console.log(slasher([1, 2, 3], 2));
  console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
  console.log(slasher(["burgers", "fries", "shake"], 1));