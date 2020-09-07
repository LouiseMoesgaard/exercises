"use strict";

const name = "louise";

const thirdLetter = name.substring(2, 3);
const firstPart = name.substring(0, 2);
const lastPart = name.substring(3, name.length);

const makeUpper = thirdLetter.toUpperCase();
const makeLower1 = firstPart.toLowerCase();
const makeLower2 = lastPart.toLowerCase();

console.log(makeLower1 + makeUpper + makeLower2);
