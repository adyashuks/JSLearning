var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});


function buildFunctions(){
    var arr =[];
    for(var i=0; i< 3; i++){
        let j =i;
        arr.push(
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function sayHello() {
    var greeting = 'Hola';
    setTimeout(function() {
        console.log(greeting);
    }, 2000);
}
sayHello();

// function tellme(callback) {
//     var a = 1000;
//     var b = 2000;
//     alert('HI nigga');
//     callback();
// }

// tellme(function() {
//     alert('I m done');
// });

// function demo(check) {
//     var a= 1;
//     var b = 2;
//     console.log(1+ 2);
//     check();
// }

// demo(function a() {
//     console.log('Get lost');
// })