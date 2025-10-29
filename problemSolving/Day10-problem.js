/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGTH to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */
//f(g(x)) we solve the second function then the result we pass it to the next function 
function compose(...functions) {
  return function (...args) {
    
    let res = functions[functions.length - 1](...args);
    //we move from right to left 
    for (let i = functions.length - 2; i >= 0; i--) {
      //we invoke the res into the next func
      res = functions[i](res);
    }
    
    return res;
  }
}

// as far as I understood we move the opp of compose ? if that so then :
function pipe(...functions){
  return function(...args){
    // first function
    let res = args[0];
    //move from left to right
    for(let i = 0; i < functions.length; i++){
      //we invoke the res into the next func
      res = functions[i](res);
    }
    return res;
  }
}

var greet = function(name){ return 'hello ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(exclaim, greet);
console.log(welcome('phillip')); // 'hello PHILLIP!'
// 1. greet('phillip') -> 'hello phillip'
// 2. exclaim('hello phillip') -> 'HELLO PHILLIP!' 

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
var addAndMultiply = pipe(add2, multiplyBy3);
console.log(addAndMultiply(5)); //should be 21  

var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
console.log(addAndMultiplyTwice(5)); // 63

// 1. add2(5) -> 7
// 2. multiplyBy3(7) -> 21
// 3. multiplyBy3(21) -> 63

//once i read a post about reduce ann reduce right functions
function composeSimple(...functions) {
  return (arg) => functions.reduceRight((acc, fn) => fn(acc), arg);
}
function pipeSimple(...functions) {
  return (arg) => functions.reduce((acc, fn) => fn(acc), arg);
}
var welcome2 = composeSimple(exclaim, greet);
console.log(welcome2('phillip')); // 'hello PHILLIP!'
var addAndMultiply2 = pipeSimple(add2, multiplyBy3);
console.log(addAndMultiply2(5)); 
var addAndMultiplyTwice2 = pipeSimple(add2, multiplyBy3, multiplyBy3);
console.log(addAndMultiplyTwice2(5));
//I cant imagine the flow of the function but its sth i wanted to add up :
//runs the functions from left to right. First add2 runs with the given args and gives a result (7). Then multiplyBy3 uses that result (7) as input and gives the final answer (21), Each function uses the output of the one before it.