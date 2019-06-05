var person = {
    fname : 'ABC',
    lname :'DEF',
    getName : function() {
        var fullname = this.fname + ' ' + this.lname;
        return fullname;
    }
}

var logName = function (lang1, lang2){
    console.log('Logged ' + this.getName());
    console.log('Arguments ' + lang1 + ' ' + lang2);

}
// var logPrsonName = logName.bind(person) ;
// logName();
// logPrsonName();
logName.call(person, 'en', 'es');

