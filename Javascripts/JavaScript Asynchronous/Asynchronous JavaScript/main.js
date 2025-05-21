function checkForPrime(num) {
    for (let p = 2; p <= Math.sqrt(num); p++) {
        if (num % p === 0) { 
            return false;
        }
    }
    return num > 1;
}
function getPrimes() {
    const primeNums = []; 
    let p = 1;
    while (primeNums.length < 1000) {
        if (checkForPrime(p)) {
            console.log(p);
            primeNums.push(p);
        }
        p+=2;
    }
    // console.log( "The execution of the getPrime() function is completed.");
}
function printMessage() { 
    console.log( "Button is clicked!");
}
getPrimes()
