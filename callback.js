var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
      this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

// function call1(arr1) {
// newArr = [];
// console.log('Inside callback');
// for(i of arr1) {
// newArr.push(i);
// }
// console.log('newArr ' + newArr);
// }

// arr2 = [1, 2, 3, 4,5];
// function call2(callback) {
    
//     callback(arr2);
//     console.log('Array 2 : ' + arr2);
// }
// call2(call1);