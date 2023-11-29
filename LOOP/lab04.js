let sumAll = 0;
for (let i = 1; i <= 100; i++) {
  sumAll += i;
}
console.log("ผลรวมของตัวเลขทั้งหมด: " + sumAll);
let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log("ผลรวมของเลขคู่: " + sumEven);
console.log("ผลรวมของเลขคี่: " + sumOdd);
let sumDivisibleBy2Squared = 0;
let sumDivisibleBy3Squared = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumDivisibleBy2Squared += i ** 2;
  }
  if (i % 3 === 0) {
    sumDivisibleBy3Squared += i ** 2;
  }
}
let result = sumDivisibleBy2Squared - sumDivisibleBy3Squared;
console.log("ผลลัพธ์: " + result);
