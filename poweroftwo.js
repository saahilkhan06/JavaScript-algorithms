function ispoweroftwo(num) {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

console.log(ispoweroftwo(8)); //true
console.log(ispoweroftwo(10)); //false
console.log(ispoweroftwo(32)); //true
