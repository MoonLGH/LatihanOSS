// Kombinasi dan permutasi

// kombinasi 
//  C(n,k) = n! / (k! * (n-k)!)

function C(n,k){
    return factorial(n) / (factorial(k) * factorial(n-k))
}

// permutasi
// P(n,k) = n! / (n-k)!

function p(n,k){
    return factorial(n) / factorial(n-k)
}

// sebagai pembina olimpiade komputer sma maju bersama, pak dengklek menyiapkan 10 soal latihan, dari nomer 1-10, yang harus di kerjakan oleh siswanya, aturan pengerjaan soalnya adalah, nomor 1,3, dan 5 wajib di kerjakan, tetapi para siswa hanya mengerjakan 8 dari 10 soal yang tersedia, banyak cara perserta memilih soal yang dapat dikerjakan adalah
// C(10,8)
console.log(C(10,8))

// jika dari kota a ke b ada 4 bis yang menghubungkan
// dan dari kota b ke c ada 3 bis yang menghubungkan
// jika seorang pergi dari kota a ke kota c melalui b, dan ingin kembali ke kota c, maka berapa banyak kemungkinan cara orang tersebut pergi
console.log(p(4,1) * p(3,1) * p((4 - 1),1) * p((3 - 1),1))



function factorial(n){
    if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}


