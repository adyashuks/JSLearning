var person = {
    fname : 'Default',
    lname : 'Default',
    getFullName : function () {
        return this.fname + " " + this.lname;
    }
} 

var john = {
    fname : 'John',
    lname : 'Doe'
}
//dont do this ever, for demo purpose only. By giving access to Perspn's proto to John object. It can access get
//fullName() 
john.__proto__ = person;
console.log(john.getFullName());
for(prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + " : " + john[prop]);
    }
}

var jane = {
    fname : 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());

//**********************************************************/
// var a = {};
// var b = function() {}
// var c= [];