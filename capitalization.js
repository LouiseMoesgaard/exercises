"use strict";

const name = "louise";

const firstLetter = name.substring(0, 1);

const rest = name.substring(1, name.length);

const lowerUpper = firstLetter.toUpperCase() + rest.toLowerCase();

console.log(lowerUpper);
