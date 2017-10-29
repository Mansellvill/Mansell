function confirmEnding(str, target) {
      if(str.substring( str.length - target.length) === target) return true;
      else return false;
}

console.log(confirmEnding('Mozilla','a'));
console.log(confirmEnding('Connor','n'));
console.log(confirmEnding('Open sesame','pen'));
console.log(confirmEnding('Open sesame','same'));
