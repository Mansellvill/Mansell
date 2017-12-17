function timer (time){
    var promise = new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('result');}, time);
    });
    
    promise.then(result => {console.log('Вывелось в консоль через '+ time + ' милесикунд!!!')});
}

timer(2000);
timer(1000);
timer(4000);
timer(3000);