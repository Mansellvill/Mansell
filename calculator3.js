function Calculator() {
    this.firstNum = 0;
    this.sum = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.firstNum += arguments[i];
        }
        return this.firstNum;
    }

    this.dif = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.firstNum -= arguments[i];
        }
        return this.firstNum;
    }

    this.mul = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.firstNum *= arguments[i];
        }
        return this.firstNum;
    }

    this.div = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== 0) {
                this.firstNum /= arguments[i];
            }
            else {
                console.log('Делить на 0 нельзя!!!');
            }
        }
        return this.firstNum;
    }
}

var calculator = new Calculator();

console.log(calculator.sum(2, 2, 3));
console.log(calculator.dif(2));
console.log(calculator.mul(2));
console.log(calculator.div(0));
