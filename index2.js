let meet = function() {
    return new Promise(function(resolve, reject){
        resolve('We  will meet, ')
    });
};

let wander = function(msg) {
    return new Promise(function(resolve, reject){
        resolve(msg + ' and roam around different places,');
    });
};

let eat = function(msg){
    return new Promise(function(resolve, reject){
        resolve(msg + ' will also eat my favorite Chinese!!!!');
    });
};

meet().then(function(result){
    return wander(result);
}).then(function(result){
    return eat(result);
}).then(function(result){
    console.log('Finshed  '+ result);
})