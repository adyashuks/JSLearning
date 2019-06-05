// function Person(firstname, lastname) {
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname = lastname;
    
// }

// var john = new Person('Adya', 'Shukla');
// // var john = new Person();
// console.log(john);

var person = {
    firstname : 'Adya',
    lastname : 'lastname',
    greet : function() {
        return ' HI  ' + this.firstname;
    }
}
var adya = Object.create(person);
adya.firstname = 'Adya';
adya.lastname = 'SHuks';
console.log(adya);

var x = {
    'name' : 'Adya',
    'age' : 24,
    'stroper' : (function s() {
        console.log('Hi beautiful');
    }())
};
localStorage.setItem('x', JSON.stringify(x));
var d= JSON.parse(localStorage.getItem('x'));
console.log(d);

sessionStorage.setItem('key', JSON.stringify(x));
var sesssion = JSON.parse(sessionStorage.getItem('key'));
console.log(sesssion);