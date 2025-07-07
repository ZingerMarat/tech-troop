const isArmstrongNumber = (number) => {
  const pow = String(number).length;
  let sum = 0;

  for (const digit of [...String(number)]) {
    sum += Number(digit) ** pow;
  }

  return sum === number;
};

for (let i = 100; i <= 999; i++) {
  if (isArmstrongNumber(i)) {
    console.log(i);
  }
}