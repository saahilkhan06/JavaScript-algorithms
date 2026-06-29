//to find the prime number

function isprime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isprime(1)); //false
console.log(isprime(5)); //true
console.log(isprime(4)); //false
