function printPrime(number) {
    let primes = [];
  
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    console.log(primes.join(", "));
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  printPrime(8);
  printPrime(15);
  printPrime(10);
  