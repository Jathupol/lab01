const principal = 100000; // เงินเริ่มต้น
const annualRate = 0.025; // อัตราดอกเบี้ยต่อปี

let totalAmount = principal;
for (let i = 0; i < years; i++) {
  const interest = totalAmount * annualRate; // ดอกเบี้ยต่อปี
  totalAmount += interest; // เพิ่มดอกเบี้ยเข้ากับเงินเริ่มต้น
}

console.log(`end of the years ${years} : ${totalAmount.toFixed(2)} `);
