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

function countWays(total, coins, index, memo) {
    if (total === 0) {
        return 1;
    }

    const key = `${total}-${index}`;

    if(memo.has(key)) {
        return memo.get(key);
    }

    if(total < 0 || index >= coins.length) {
        return 0;
    }

    const waysIncludingCoin = countWays(total - coins[index], coins, index, memo); 
    const waysExcludingCoin = countWays(total, coins, index + 1, memo);

    memo.set(key, waysIncludingCoin + waysExcludingCoin);
    return memo.get(key);
}

function coinCombination(totalPence) {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const memoization = new Map();
    // im using memoization to optimize the recursive solution , using it as cache to store already computed results(thanks to walead for this idea from yesterday's standup meeting)
    return countWays(totalPence, coins, 0, memoization);
}


// --- Example Usage ---
console.log(coinCombination(200)); //-> 73682