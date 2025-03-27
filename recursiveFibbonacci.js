function recursiveFibbonacci(n) {
    if(n < 2) return n;
    return recursiveFibbonacci(n-1) + recursiveFibbonacci(n-2);
}

console.log(recursiveFibbonacci(6));


//Big O = O(2^n)