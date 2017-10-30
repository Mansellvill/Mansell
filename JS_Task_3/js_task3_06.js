function copyObj(obj){
    var objCopy = {};
    for(var keys in obj){
        if(obj[keys]=="object"){
            objCopy[keys] = copyObj(obj[keys]);
        }
        else{
        objCopy[keys] = obj[keys];
        }
    }
    return objCopy;
}

var user = {
    name: 'Jon',
    email: 'jon@mail.ru',
    age: 22,
    dateOfBirth: {day: 19, month: 'May', year: 1995 }
};

console.log(Object.keys(user), Object.keys(user.dateOfBirth));
console.log(user.name,user.email, user.age, user.dateOfBirth);
var userCopy = copyObj(user);
console.log(Object.keys(userCopy), Object.keys(userCopy.dateOfBirth));
console.log(userCopy.name,userCopy.email, userCopy.age, userCopy.dateOfBirth);
