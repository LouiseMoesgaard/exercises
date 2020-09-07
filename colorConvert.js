"use strict";

// const colorInput = "#bada55";

// convertColor(colorInput);

// function convertColor() {
//     let r = colorInput.substring(1, 3);
//     let g = colorInput.substring(3, 5);
//     let b = colorInput.substring(5, 7);

//     r = Number.parseInt(r, 16);
//     g = Number.parseInt(g, 16);
//     b = Number.parseInt(b, 16);

//     console.log(r, g, b);
// }

// let r = 9;
// let g = 0;
// let b = 37; 

// RGBtoHex(r, g, b);

// function RGBtoHex(r, g, b) {
//     r = r.toString(16).padStart(2,"0");
//     g = g.toString(16).padStart(2,"0");
//     b = b.toString(16).padStart(2,"0");

//     // if(r.length < 2 ){
//     //     r = "0" + r;
//     // }

//     const hex = "#" + r + g +b;
//     console.log(hex);
// }

cssToRGB("rgb(192, 13, 1)");
function cssToRGB(rgb) {

    let colorarray = rgb.substring(4,rgb.length-1).split(",");

    let r = parseInt(colorarray[0].trim());
    let g = parseInt(colorarray[1].trim());
    let b = parseInt(colorarray[2].trim());


    console.log(r, g, b);

    

    

}