"use strict";
//-------------
// union types
//-------------
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'john@gmail.com';
email = null;
let anotherId;
anotherId = 'hello';
anotherId = 10;
// union type pitfall
function swapIdType(id) {
    // can only use props and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id;
}
