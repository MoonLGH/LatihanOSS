// for simple, modulo is the the rest of division
// untuk lebih mudah, module sama dengan sisa bagi

// example/contoh
// 5 % 2 = 1 // 2*2 SISA/REST 1

function modulo(a,n){
    return a - Math.floor(a/n)*n;
}

console.log(modulo(15,30))
// KAIDAH 1, jika a < n maka a % n = a
// RULE 1, if a < n then a % n = a

console.log(modulo((10+17+21),9))
// KAIDAH 2, jika a > n maka a % n = (a % n) % n
// RULE 2, if a > n then a % n = (a % n) % n

console.log(modulo(1987,2021))