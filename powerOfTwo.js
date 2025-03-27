function isPowerOfTowBitwise(n) {
    if( n < 1) return false;

    return (n & (n-1)) === 0
}


//Big O = O(1)

// function isPowerOfTwo(n) {
//     if(n < 1) return false;

//     while(n > 2){
//         if(n%2 != 0){
//             return false;
//         }
//         n = n/2;
//     }
//     return true;
// }

console.log(isPowerOfTowBitwise(3))
console.log(isPowerOfTowBitwise(8))
console.log(isPowerOfTowBitwise(56))
console.log(isPowerOfTowBitwise(128))
console.log(isPowerOfTowBitwise(1))
console.log(isPowerOfTowBitwise(2))


//Big O = O(logn)