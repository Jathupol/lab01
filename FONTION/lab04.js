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
  
  console.log(isPrime(20)); // true เป็นจำนวนเฉพาะ
  console.log(isPrime(23)); 
  console.log(isPrime(24)); // false ไม่เป็นจำนวนเฉพาะ
  