/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/

//   var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 */
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i< n-1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
               
                /* OR */

                // let temp = arr[i];
                // arr[i] = arr[i + 1];
                // arr[i + 1] = temp;

                 swapped = true;
            }
         }
         n--;// we can decrease n bcs the largest elemnt at the end (already sorted) but the time complixty still o(n^2) bcs we cant prevent the worst case scienario
         
    }while(swapped);// if sawpped is false we can leave early bcs its  already sorted, still the time complexity is o(n^2) in worst case but o(n) in best case (when the array is already sorted)

    return arr;
}
//Result:
//so in conclusion we cant prevent the worst case scienario o(n^2) but we can optimizer for the best case scienario O(n)

// Example usage:
const unsortedArray = [34, 203, 3, 746, 200, 984, 198, 764, 9];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);