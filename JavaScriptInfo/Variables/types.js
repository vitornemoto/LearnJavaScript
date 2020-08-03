
//Bigint
const Bigint = '1234567890123456789012345678901234567890n';

//String
 /*In JavaScript, there are 3 types of quotes.

    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.
*/

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


//Boolean

let nameFieldChecked = true;
let ageFieldChecked = false;



 /*The typeof operator

The typeof operator returns the type of the argument. 
It’s useful when we want to process values of different types differently or just want to do a quick check.

*/
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
