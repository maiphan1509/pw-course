let sum: number = 0;
for (let i: number = 1; i <= 100; i++) {
  sum += i;
}

console.log(`1. The sum of the first 100 numbers is: ${sum}`);

console.log("2. The multiplication table from 2 to 9:");
for (let i: number = 2; i <= 9; i++) {
  for (let j: number = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

const numbers: number[] = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    numbers.push(i);
  }
}
console.log(`3. The numbers are odd from 1 to 99 are: ${numbers.join(", ")}`);

const email: string[] = [];
for (let i = 1; i <= 10; i++) {
  email.push(`user${i}@example.com`);
}
console.log(`4. The email addresses from 1 to 10 are: ${email.join(", ")}`);

const revenue: { month: string; amount: number }[] = [
  { month: "1", amount: 1000 },
  { month: "2", amount: 1500 },
  { month: "3", amount: 2000 },
  { month: "4", amount: 2500 },
  { month: "5", amount: 3000 },
  { month: "6", amount: 3500 },
  { month: "7", amount: 4000 },
  { month: "8", amount: 4500 },
  { month: "9", amount: 5000 },
  { month: "10", amount: 5500 },
  { month: "11", amount: 6000 },
  { month: "12", amount: 6500 },
];

let totalRevenue: number = 0;
for (let i: number = 0; i < revenue.length; i++) {
  totalRevenue += revenue[i].amount;
}
console.log(`5. The total revenue for 12 months: ${totalRevenue}`);
