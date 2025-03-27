function isPrimeNumber(n) {
    if(n < 2) return false;
    
    for(let i=2; i <= Math.sqrt(n); i++) {
        if(n%i == 0){
            return false
        }
    }
    return true;
}

console.log(isPrimeNumber(21))
console.log(isPrimeNumber(53))
console.log(isPrimeNumber(39))
console.log(isPrimeNumber(41))
console.log(isPrimeNumber(7))
console.log(isPrimeNumber(11))


//Big O = O(sqrt(n))