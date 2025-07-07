let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

let discount = 0;

if (customerType === "vip") {
  discount = 20;
} else if (customerType === "premium") {
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    discount = 15;
  } else {
    discount = 10;
  }
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    discount = 10;
  } else if (purchaseAmount > 50) {
    discount = 5;
  } else {
    discount = 0;
  }
}

console.log(`Discount: ${discount}%`);
