let i = 0
let j
let c = 0
while (i<5){
    for(j = i; j<=8; j++){
        i = i+j
        c = c+1
        console.log(c)
    }
    console.log(i+"-"+j)
}
console.log(i)