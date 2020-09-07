"use strict";

const colorInput = "#bada55";

convertColor(colorInput);

function convertColor() {
    let r = colorInput.substring(1, 3);
    let g = colorInput.substring(3, 5);
    let b = colorInput.substring(5, 7);

    r = Number.parseInt(r, 16);
    g = Number.parseInt(g, 16);
    b = Number.parseInt(b, 16);

    console.log(r, g, b);
}