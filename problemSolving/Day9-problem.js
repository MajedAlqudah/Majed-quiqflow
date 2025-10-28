/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:

function commonCharacters(...strings){
    if(strings.length === 0) return '';
    const [first,...rest] = strings;
    let res = '';
    let seen = new Set();

    for(let char of first){
        if(seen.has(char) || char === ' ') continue;
        //here we iterate on every element of the rest array and use the include() function to chech if it has teh char from the first element
        if(rest.every(str => str.includes(char))) 
        {
            res +=char;
            seen.add(char);
        }
    }
    return res;

}

//usage for more than 1 strings
console.log(commonCharacters('acexivou', 'aegihobu'));//aeiou
console.log(commonCharacters('hello', 'world', 'loop'));// lo
console.log(commonCharacters('abc 123', '12 3def', '123 ghi'));//123