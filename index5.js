var arr = [
    1,
    false,
    {
        name : 'Adya Shukla',
        age : 24
    },
    function(name){
        console.log(name);
    }
];
console.log(arr);

arr[3](arr[2].name);

function greet(fname, lname, lang){
    lang = lang || 'en' ;
    console.log(fname);
    console.log(lname);
    console.log(lang);
    console.log(arguments);
    if(arguments.length > 0){
        console.log('args[0] : ' + arguments[0]);

    }
}

greet();
console.log('*******************');
greet('Anubha', 'Shukla');

(function (){
    console.log('Hello')
    return {
        fname : 'Meaow'
    }
}());
// console.log(getP());