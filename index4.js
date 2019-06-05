// console.log(this);
function a(){
    console.log(this);  
    this.newvar = 'hello';
}
a();
console.log(newvar);
var b = function (){
    console.log(this);  
}

b();

var c = {
    name : 'C object',
    log : function() {
        this.name = 'updated C object';
        console.log(this);
    }
}
c.log();