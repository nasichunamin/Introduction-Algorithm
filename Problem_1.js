const bilPrima = (angka) =>{
    let pembagi = 0;
    for(let i=0; i <= angka; i++){
        if(angka % i == 0){
            pembagi++
        }
    }
    if(pembagi == 2){
        console.log("Bilangan Prima")
    }else{
        console.log("Bukan Bilangan Prima")
    }
}

// Sample Test Case
bilPrima(3)
bilPrima(7)
bilPrima(10)