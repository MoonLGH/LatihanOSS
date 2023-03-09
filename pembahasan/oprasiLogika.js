let a = false
let b = true
let c = true
// Pengertian
// || salah satu \\

// True
console.log((a && b) || (a && c) || (b && c))

console.log(a && (b || c))