/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */
function balancedParens(str) {
    const stack = [];
    // we need a dictionary making each open bracket the key and the closed the value
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const closingBrackets = new Set([')', '}', ']']);

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (brackets[char]) {
            // if we found an opener we push it 
            stack.push(char);
        } else if (closingBrackets.has(char)) {
            //here we should handle the early closer
            if (stack.length === 0) {
                return false;
            }

            //get the last opener 
            const lastOpen = stack.pop();

            //matching closer and opener
            if (brackets[lastOpen] !== char) {
                return false;
            }
        }
    }
    //this way we ignorede the non-brackets characters 
    return stack.length === 0;
}



 //Example 
console.log("'(':", balancedParens('('));    // false
console.log("'()':", balancedParens('()'));   // true
console.log("')(':", balancedParens(')('));   // false
console.log("'(())':", balancedParens('(())')); // true
console.log("())", balancedParens('())'));  // false
console.log("----------------------------------------------------")
console.log("'[](){}':", balancedParens('[](){}')); // true
console.log("'[({})]':", balancedParens('[({})]'));   // true
console.log("'[(]{)}':", balancedParens('[(]{)}')); // false
console.log("----------------------------------------------------")
console.log("' var wow  = { yo: thisIsAwesome() }':", balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log("' var hubble = function() { telescopes.awesome();':", balancedParens(' var hubble = function() { telescopes.awesome();')); // false