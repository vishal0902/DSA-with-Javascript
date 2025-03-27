function factorial (n) {
    let fact = n ? n : 1;
    for (let i=n-1 ; i>0; i--) {
        fact *= i
    }
    return fact;
}

console.log(factorial(5))


//Big O = O(n)