function Calculator(a,b){
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function(){
    return this.a + this.b;
}
Calculator.prototype.sub = function(){
    return this.a - this.b;
}
Calculator.prototype.mult = function(){
    return this.a * this.b;
}
Calculator.prototype.log = function(){
    console.log(this.a +  "+" + this.b + "=" + this.add() +"\n" +
                this.a +  "-" + this.b + "=" + this.sub() +"\n" +
                this.a +  "*" + this.b + "=" + this.mult() +"\n" 
                )
}

var c1 = new Calculator(1,1);
setTimeout(function(){c1.log.call(c1)}, 2000);
var c2 = new Calculator(2,3);
c2.log();
