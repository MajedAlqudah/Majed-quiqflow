function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
   
}


console.log(fibonacci(50));   // -> 12586269025 
console.log(fibonacci(50));
console.log(fibonacci(100));  // -> 354224848179261915075
console.log(fibonacci(100));
console.log(fibonacci(200));    // -> 280571172992510140037611932413038677189525