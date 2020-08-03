/*
    let – is a modern variable declaration.
    var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
    const – is like let, but the value of the variable can’t be changed.
*/

let admin;
let name = "John";
let planet = "Terra";
let currentUser = "Vitor";

const BIRTHDAY = "18.04.1982";
//const AGE = someCode(BIRTHDAY);

admin = name;

alert(currentUser);