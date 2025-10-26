function collatzSteps(n) {
    let steps = 1;

    // while (n !== 1) {
    //     if (n % 2 === 0) {
    //         n = n / 2;
    //     } else {
    //         n = 3 * n + 1;
    //     }   
    //     steps++;
    // }
    // return steps;
    
    return n === 1 ? steps : collatzSteps(n % 2 === 0 ? n / 2 : 3 * n + 1) + 1;
}

function findLongestCollatzChain(limit) {
    let longestChain = 0;
    let numberWithLongestChain = 0;

    for (let i = 1; i < limit; i++) {
        let current = collatzSteps(i);

        if (current > longestChain) {
            longestChain = current;
            numberWithLongestChain = i;
        }
    }

    console.log(`The starting number under ${limit} with the longest chain is: ${numberWithLongestChain}`);
    console.log(`It has ${longestChain} terms.`);

    return {
        number: numberWithLongestChain,
        chainLength: longestChain
    };
}


function findLongestChainWithCache(limit) {
    const cache = new Array(limit + 1).fill(0);
    cache[1] = 1; 

    let longestChain = 0;
    let numberWithLongestChain = 0;

    for (let i = 1; i < limit; i++) {
        let n = i;
        let currentChainLength = 0;

        while (n !== 1 && (n >= limit || cache[n] === 0)) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
            currentChainLength++;
        }

        currentChainLength += cache[n];

        cache[i] = currentChainLength;

        if (currentChainLength > longestChain) {
            longestChain = currentChainLength;
            numberWithLongestChain = i;
        }
    }

    console.log(`The starting number under ${limit} with the longest chain is: ${numberWithLongestChain}`);
    console.log(`It has ${longestChain} terms.`);

    return {
        number: numberWithLongestChain,
        chainLength: longestChain
    };
}


findLongestChainWithCache(1000000);

const limit = 1000000;
const result = findLongestCollatzChain(limit);