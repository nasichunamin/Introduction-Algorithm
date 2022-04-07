const n = 5
let counter = 0

for(i = 1; i <= n; i++){
    if(n % i == 0){
        counter++
    }
}

if(counter % 2 == 0){
    console.log("Lampu Mati")
}else{
    console.log("Lampu Menyala")
}

