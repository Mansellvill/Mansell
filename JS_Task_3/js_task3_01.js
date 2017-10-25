var user = {
    name: 'Vasya',
    email: null,
    age: 22
};

console.log(Object.keys(user));
delete user.age;
console.log(Object.keys(user));