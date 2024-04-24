// && || !

// &&
// A && B
// true and true = true
// true and false = false
// false and true = false
// false and false = false
var a = 10
var b = 20
var c = 0
var d = 30

if (a > b && c > d) {
    console.log (' A is Greater Than B and C is greather than D')
} else {
    console.log('At least one condition is false')
}

// ||
// A || B
// true || true = false
// true || false = false
// false || true = false
// false || false = true

var a = 10
var b = 20
var c = 30
var d = 20

if (a > b || c > d) {
    console.log (' A is Greater Than B or C is greather than D')
} else {
    console.log('At least one condition is false')
}


// !! ! true or false
var cheek  = !!(a > b)
console.log(cheek);