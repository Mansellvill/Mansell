function copyObj(obj){
    var objCopy = {};
    for(var keys in obj){
        objCopy[keys] = obj[keys];
    }
    return objCopy;
}
var user = {
    name: 'Jon',
    email: 'jon@mail.ru',
    age: 22
};

console.log(user.name, user.email, user.age);
var userCopy = copyObj(user);
console.log(userCopy.name,userCopy.email, userCopy.age);

