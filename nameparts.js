"use strict";

// const fullName = "Louise Moesgaard Nielsen";

// const splitNames = fullName.split(" ");



// console.log(splitNames[0]);
// console.log(splitNames[1]);
// console.log(splitNames[2]);


// const firstName = fullName.substring(0, fullName.indexOf(" "));
// const middleName = fullName.substring(
//   firstName.length + 1,
//   fullName.lastIndexOf(" ")
// );
// const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);


// console.log(firstName, middleName, lastname);


// const fullName = "Louise Moesgaard Nielsen";
// getNameParts(fullName);

// function getNameParts(fullName){
//     let firstName = fullName.substring(0, fullName.indexOf(" "));
//     let middleName = fullName.substring(firstName.length + 1,fullName.lastIndexOf(" "));
//     let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

//     console.log({firstName, middleName, lastName});
// }



// fullName("Potter", "Harry");

// function fullName(lastName, firstName, middleName) {

//     const fullName = firstName + " " + middleName + " " + lastName;

//     let newName;

//     if(middleName === undefined){
//         newName = `${firstName} ${lastName}`
//     } else {
//         newName = `${firstName} ${middleName} ${lastName}`
//     }

//     console.log(newName);
// }



// let newName = fullName("Potter", "Harry", "søren");
// console.log(newName);

// function fullName(lastName, firstName, middleName) {

//     // const fullName = firstName + " " + middleName + " " + lastName;

// //     let newName;

// //     if(middleName === undefined){
// //         newName = `${firstName} ${lastName}`
// //     } else {
// //         newName = `${firstName} ${middleName} ${lastName}`
// //     }

// //     return newName;
// // }



function capitalize(str) {
const firstLetter = str.substring(0, 1);
const rest = str.substring(1, str.length);
const lowerUpper = firstLetter.toUpperCase() + rest.toLowerCase();  
return lowerUpper;  
}

function getNameParts(fullName){
    let firstName = capitalize(fullName.substring(0, fullName.indexOf(" ")));
    let middleName = capitalize(fullName.substring(firstName.length + 1,fullName.lastIndexOf(" ")));
    let lastName = capitalize(fullName.substring(fullName.lastIndexOf(" ") + 1));

    return {firstName, middleName, lastName};
}

const fullName = "louise moesgaard nielsen";
let name = getNameParts(fullName);

console.log(name);
