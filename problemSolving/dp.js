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

const gridTraveler =(m ,n, memo = {})=>{
    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;

    const key = m + ',' + n;
    if(key in memo) return memo[key];
    // mem[key] = down+right
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler(1,1)); // -> 1
console.log(gridTraveler(2,3)); // -> 3
console.log(gridTraveler(3,2)); // -> 3
console.log(gridTraveler(3,3)); // -> 6
console.log(gridTraveler(18,18)); // -> 2333606220

const canSum = (target, numbers) => {
    
}