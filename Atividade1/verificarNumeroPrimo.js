function ex1(n){

    divisor = 0

    for(i = 1; i <= n/2; i ++){
        if(n % i == 0){
            divisor++
        }
    }

    if(divisor <= 1){
        console.log("Numero primo")
    }else{
        console.log("Numero nao primo")
    }

}

ex1(12)
