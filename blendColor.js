
/*
blend two colors to create the color that is at the percentage away from the first color
this is a 5 step process
    1: validate input
    2: convert input to 6 char hex
    3: convert hex to rgb
    4: take the percentage to create a ratio between the two colors
    5: convert blend to hex
    @param: color1      => the first color, hex (ie: #000000)
    @param: color2      => the second color, hex (ie: #ffffff)
    @param: percentage  => the distance from the first color, as a decimal between 0 and 1 (ie: 0.5)
    @returns: string    => the third color, hex, represenatation of the blend between color1 and color2 at the given percentage
    */


function seleteColor(colorType) {
    var cx = 130, cy = 130, cz = 130

    switch (colorType) {
        // 255,0,0
        // 0,255,0
        // 0,0,255
        //     cmy cm cy my
        // rb
        // gb 
        case 0:
            var cR = (Math.random())
            console.log('hi')

            if (cR > 0.5) {
                cx = 130, cy = 30, cz = 190
            } else {
                cx = 30, cy = 130, cz = 190
            }
            break
        case 1:
            var cR = (Math.random())
            console.log('hi')

            if (cR > 0.5) {
                cx = 190, cy = 30, cz = 130
            } else {
                cx = 30, cy = 190, cz = 130
            }
            break
        case 2:
            var cR = (Math.random())

            if (cR > 0.5) {
                cx = 130, cy = 30, cz = 190
            } else {
                cx = 190, cy = 130, cz = 30
            }
            break
        case 3:
            var cR = (Math.random())

            if (cR > 0.5) {
                cx = 170, cy = 10, cz = 150
            } else {
                cx = 190, cy = 130, cz = 30
            }
            break

        case 4:
            var cR = (Math.random())
            if (cR > 0.5) {
                cx = 30, cy = 150, cz = 190
            } else {
                cx = 190, cy = 130, cz = 30
            }
            break

        case 5:
            var cR = (Math.random())
            if (cR > 0.5) {
                cx = 0, cy = 140, cz = 190
            } else {
                cx = 160, cy = 180, cz = 20
            }
            break

        case 6:
            var cR = (Math.random())
            if (cR > 0.5) {
                cx = 0, cy = 0, cz = 0
            } else {
                cx = 255, cy = 255, cz = 255
            }
            break

    }
    return rgb_to_hex(cx, cy, cz)
    return `rgb(${cx}, ${cy}, ${cz})`
}
function blend_colors(color1, color2, percentage, mode = 'hex') {
    // check input
    color1 = color1 || '#000000';
    color2 = color2 || '#ffffff';
    percentage = percentage || 0.5;

    // 1: validate input, make sure we have provided a valid hex
    if (color1.length != 4 && color1.length != 7)
        throw new error('colors must be provided as hexes');

    if (color2.length != 4 && color2.length != 7)
        throw new error('colors must be provided as hexes');

    if (percentage > 1 || percentage < 0)
        throw new error('percentage must be between 0 and 1');

    // output to canvas for proof




    // 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
    //      the three character hex is just a representation of the 6 hex where each character is repeated
    //      ie: #060 => #006600 (green)
    if (color1.length == 4)
        color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
    else
        color1 = color1.substring(1);
    if (color2.length == 4)
        color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
    else
        color2 = color2.substring(1);


    // 3: we have valid input, convert colors to rgb
    color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
    color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];


    // 4: blend
    var color3 = [
        (1 - percentage) * color1[0] + percentage * color2[0],
        (1 - percentage) * color1[1] + percentage * color2[1],
        (1 - percentage) * color1[2] + percentage * color2[2]
    ];

    if (mode == 'rgb') {
        return color3
    }
    // 5: convert to hex
    color3 = rgb_to_hex(color3[0], color3[1], color3[2])


    // color3 in the middle

    // return hex
    return color3;
}

/*
    convert a Number to a two character hex string
    must round, or we will end up with more digits than expected (2)
    note: can also result in single digit, which will need to be padded with a 0 to the left
    @param: num         => the number to conver to hex
    @returns: string    => the hex representation of the provided number
*/
function int_to_hex(num) {
    var hex = Math.round(num).toString(16);
    if (hex.length == 1)
        hex = '0' + hex;
    return hex;
}
function rgb_to_hex(r, g, b) {
    return '#' + int_to_hex(r) + int_to_hex(g) + int_to_hex(b);
}


function mixColor(pairs, intensity) {
    for (const pair of pairs) {
        color1 = pair[0].render.fillStyle
        color2 = pair[1].render.fillStyle
        border1 = pair[0].render.strokeStyle
        border2 = pair[1].render.strokeStyle
        pair[0].render.fillStyle = blend_colors(color1, color2, intensity)
        pair[1].render.fillStyle = blend_colors(color2, color1, intensity)

        k1 = blend_colors(border1, border2, intensity)
        k2 = blend_colors(border2, border1, intensity)
        pair[0].render.strokeStyle = blend_colors(k1, '#000000', 0.0026)
        pair[1].render.strokeStyle = blend_colors(k2, '#000000', 0.0026)



    }
}

