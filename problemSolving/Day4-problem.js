/*
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of ways to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

// function countWays(total, coins, index, memo) {
//     if (total === 0) {
//         return 1;
//     }

//     const key = `${total}-${index}`;

//     if(memo.has(key)) {
//         return memo.get(key);
//     }

//     if(total < 0 || index >= coins.length) {
//         return 0;
//     }

//     const waysIncludingCoin = countWays(total - coins[index], coins, index, memo); 
//     const waysExcludingCoin = countWays(total, coins, index + 1, memo);

//     memo.set(key, waysIncludingCoin + waysExcludingCoin);
//     return memo.get(key);
// }

// function coinCombination(totalPence) {
//     const coins = [1, 2, 5, 10, 20, 50, 100, 200];
//     const memoization = new Map();
//     // im using memoization to optimize the recursive solution , using it as cache to store already computed results(thanks to walead for this idea from yesterday's standup meeting)
//     return countWays(totalPence, coins, 0, memoization);
// }

function coinCombination(total, coins = [1, 2, 5, 10, 20, 50, 100, 200], index = 0, memo = {}) {
    if (total === 0) {
        return 1;
    }
    
    if (total < 0 || index >= coins.length) {
        return 0;
    }

    const key = `${total}-${index}`;

    if (key in memo) {
        return memo[key];
    }

    const waysIncludingCoin = coinCombination(total - coins[index], coins, index, memo);
    const waysExcludingCoin = coinCombination(total, coins, index + 1, memo);

    memo[key] = waysIncludingCoin + waysExcludingCoin;
    
    return memo[key];
}

// Alternative iterative dynamic programming approach / nested loops
// function coinCombination(total) {
//     const coins = [200, 100, 50, 20, 10, 5, 2, 1];
//     const ways = Array(total + 1).fill(0);
//     ways[0] = 1;
//     for (const coin of coins) {
//         for (let amount = coin; amount <= total; amount++) {
//             ways[amount] += ways[amount - coin];
//         }
//     }
//     return ways[total];
// }

console.log(coinCombination(200)); //-> 73682
console.log(coinCombination(100)); //-> 4562
console.log(coinCombination(50));
console.log(coinCombination(20)); //-> 41