console.log('Adya');
let promiseToMeet = new Promise(function(resolve, reject){
    let hasDecided = true;

    if(hasDecided){
        resolve('Will meet in evening');
    } else {
        reject('Sorry cant meet')
    }
});

promiseToMeet.then(function(fromResolve){
    console.log('Lets catch up!!' + fromResolve);
}).catch(function(fromRejct){
console.log('Well... ' +fromRejct)
});