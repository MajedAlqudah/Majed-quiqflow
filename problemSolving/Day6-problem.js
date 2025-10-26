/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
*/

function binarySearch(numbers , target){
	let left = 0;
	let right = numbers.length - 1;

	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);
		const val = numbers[mid];

		if (val === target) return mid;
		if (val < target) left = mid + 1;
		else right = mid - 1;
	}

	return -1; 
}



// --- Example Usage ---
const sortedArr = [2, 5, 7, 8, 11, 12, 19, 22, 25, 30];

console.log(`Array: [${sortedArr}]`);
console.log(`Finding 19... Index: ${binarySearch(sortedArr, 19)}`); // -> 6
console.log(`Finding 2... Index: ${binarySearch(sortedArr, 2)}`);   // -> 0
console.log(`Finding 30... Index: ${binarySearch(sortedArr, 30)}`); // -> 9
console.log(`Finding 13... Index: ${binarySearch(sortedArr, 13)}`); // -> -1
