function nonConstructibleChange(coins) {
  if (!coins || coins.length === 0) return 1;

  if (coins.length === 1 && coins[0] !== 1) return 1;

  coins.sort((a, b) => a - b);

  let change = 0;
  for (const coin of coins) {
    const nextChange = change + 1;
    if (coin > nextChange) {
      return nextChange;
    }

    change += coin;
  }

  return change + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

console.log(nonConstructibleChange([1, 1, 1, 1, 1]));
