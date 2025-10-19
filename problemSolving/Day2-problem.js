/*
*
* Given an array representing prices of the stock on different days, 
* find the maximum profit that can be earned by performing maximum of 
* one transaction. A transaction consists of activity of buying and 
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125} 
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65 
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit 
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var maximumProfit  = function(array) {
    if (array.length < 2 || !array) {
        return 0;
    }
    let minPrice = array[0];
    let maxProfit = 0;

    for (let i = 1; i < array.length; i++) {
        let currentProfit = array[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
        minPrice = Math.min(minPrice, array[i]);
        //the helper functions is so unefficient here we can use :
        // if (array[i] < minPrice) {
        //     minPrice = array[i];
        // } else {
        //     let profit = array[i] - minPrice;
        //     if (profit > maxProfit) {
        //         maxProfit = profit;
        //     }
        // } i didnt use it bcs i have to use the helper functions
    }
    return maxProfit;
}


let array1 = [100, 80, 120, 130, 70, 60, 100, 125];
console.log(maximumProfit(array1)); // should return 65

let array2 = [100, 80, 70, 65, 60, 55, 50];
console.log(maximumProfit(array2)); // should return 0

