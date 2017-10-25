function keysObject(obj){
    for(var keys in obj){
        console.log(keys + ' ' + obj[keys]);
    }
}

var user = {
    name: 'Jon',
    email: 'jon@mail.ru',
    age: 21
};
keysObject(user);