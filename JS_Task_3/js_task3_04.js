function checkProperty(nameProp, obj){
    if(nameProp in obj){
        return obj;
    }
    else {
        obj[nameProp] = 'new';
        return obj;
    }
}

var user = {
    name: 'Jon',
    email: 'jon@mail.ru',
   
};
console.log(Object.keys(user));
user = checkProperty('age',user);
console.log(Object.keys(user));
console.log(user.age);