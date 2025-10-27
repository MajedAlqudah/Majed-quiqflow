/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
*/

function allAnagrams(str) {
    //base case:
    if (str.length === 1) {
        return [str];
    }

    let anag = [];

    for (let i = 0; i < str.length; i++){
        const first = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const subAnagrams = allAnagrams(remaining);

        for (let subAnag of subAnagrams){

            anag.push(first + subAnag);
        }
    }

    //we can use tracker like this 
    /**
     *  const usedChars = {};
     *  for (let i = 0; i < str.length; i++){
        const first = str[i];

        if(usedChars[first]) continue ;
        usedChars[first] = true
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const subAnagrams = allAnagrams(remaining);

        for (let subAnag of subAnagrams){

            anag.push(first + subAnag);
        }
    }
     */
    //return anag;

    // Set prevent duplicates (ik its less efficent but tracking the used characters is not working or I missed sth idk)
    return [...new Set(anag)];

    
}

// time complexity is O(n.n!) and the tracker O(n.p) where p is the number of unique letters
var anagrams = allAnagrams('abc');
console.log(anagrams);
var anagrams2 = allAnagrams('abcd');
console.log(anagrams2);
var anagrams3 = allAnagrams('abcde');
console.log(anagrams3);