var arr1 = [1, 2, 3 ];
// arr2.push(arr1.forEach(i=> i));
// console.log(arr2.map(i=>  i*2));
// console.log(arr1.map(i=>  i*2));

function mapForEach(arr, fn) {

    var newArr = [];
    for(var i =0; i< arr1.length ; i++) {
        newArr.push(
            fn(arr1[i])
        );
    };

    return newArr
}

var arr2 = mapForEach(arr1, function(item){
    return item *2;
});

console.log(arr2);