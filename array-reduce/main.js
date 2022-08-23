const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const total = 0;

const sum = numbers.reduce((x, y) => (x + y));
const product = numbers.reduce((x, y) => (x * y));

function accountBalance(total) {
  return account.reduce((x, y) => {
    if (x.type) {
      total = x.amount + y.amount;
    } else if (y.type === 'withdrawal') {
      total = total - y.amount;
    } else if (y.type === 'deposit') {
      total = total + y.amount;
    }
    return total;
  });
}
const balance = accountBalance();
const composite = traits.reduce((x, y) => Object.assign(x, y));

console.log(sum);
console.log(product);
console.log(balance);
console.log(composite);
