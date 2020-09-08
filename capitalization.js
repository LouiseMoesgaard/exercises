"use strict";

// const name = "louise";

// const firstLetter = name.substring(0, 1);

// const rest = name.substring(1, name.length);

// const lowerUpper = firstLetter.toUpperCase() + rest.toLowerCase();

// console.log(lowerUpper);



// const str = "louise";
// const middleName = "moesgaard";

// capitalize(str);
// capitalize(middleName);

// function capitalize(str) {
// const firstLetter = str.substring(0, 1);
// const rest = str.substring(1, str.length);
// const lowerUpper = firstLetter.toUpperCase() + rest.toLowerCase();

// console.log(lowerUpper);
    
// }


const str = "louise";
const cap = capitalize( str );
console.log(cap);

function capitalize(str) {
const firstLetter = str.substring(0, 1);
const rest = str.substring(1, str.length);
const lowerUpper = firstLetter.toUpperCase() + rest.toLowerCase();

return lowerUpper;
    
}
