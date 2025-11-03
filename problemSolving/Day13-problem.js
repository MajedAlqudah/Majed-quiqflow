/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/
function flatten(...args) {
    let result = [];

    // Using an iterative approach with a stack to avoid recursion with reverse order
    const stack = [...args].reverse();

    while(stack.length > 0) {
      const current = stack.pop();

      if (Array.isArray(current)) {
        stack.push(...current.reverse());
        //if item is an array, push its elements onto the stack in reverse order, we reverse them to maintain the correct order
      } else {
        //if its not an array , push it to the result
        result.push(current);
      }
    }
    
    return result;
  } 
// Example usage:
console.log(flatten(1, [2, 3], 4, 5, [6, [7]])); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // Output: ['a', 'b', 2, 3, null, 4, 'c']