function User(fullName){
    this.fullName = fullName;

    Object.defineProperty(this, 'firstName',{
        get: function(){
            return this.fullName.split(' ')[0];
        },
        set: function(firstName){
            this.fullName = firstName + ' ' + this.lastName;
        }

    });

    Object.defineProperty(this, 'lastName',{
        get: function(){
            return this.fullName.split(' ')[1];
        },
        set: function(lastName){
            this.fullName = this.firstName + ' ' + lastName;
        }

    });
   
}

var user = new User('Петя Иванов');
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);
user.firstName = 'Вася';
user.lastName = 'Петров';
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);

