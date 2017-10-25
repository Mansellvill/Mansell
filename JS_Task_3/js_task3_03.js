function checkProperty(nameProp, obj){
    if(nameProp in obj){
        return true;
    }
    else {
        return false;
    }
}

var user = {
    name: 'Jon',
    email: 'jon@mail.ru',
    age: 21
};

if(checkProperty('age', user)){
    console.log(true);    
}
else{
    console.log(false);   
}

if(checkProperty('lalala', user)){
    console.log(true);    
}
else{
    console.log(false);   
}

