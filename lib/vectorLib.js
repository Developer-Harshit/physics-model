function findMag(vector) {
    return (vector.x ** 2 + vector.y ** 2) ** 0.5
}

function subtractVectors(v1, v2) {
    // r --> v1 to v2 so we do v2 - v1
    return {
        x: v2.x - v1.x,
        y: v2.y - v1.y,
    }
}



function findUnit(vector) {
    const mag = findMag(vector)
    return {
        x: vector.x / mag,
        y: vector.y / mag
    }
}
function pointToVect(x, y) {
    return {
        x, y
    }
}
function vectToPoint(vect) {
    return [vect.x, vect.y]
}
