/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediately see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

function dirReduc(arr){
    const opposite ={
        'NORTH':'SOUTH',
        'SOUTH':'NORTH',
        'EAST':'WEST',
        'WEST':'EAST'
    };

    let stack = [];

    for(let dir of arr){
        if(stack.length > 0 && stack[stack.length - 1] === opposite[dir]){
            //remove it bcvs its useless move
            stack.pop();
        }
        else{ 
            //push it bcs its not useless
            stack.push(dir);
        }
    }
    if(stack.length==0){
        return "don't need to move at all"
    }
    return stack;
}

// Example usage:
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // Output: ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])); // Output: "don't need to move at all"
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])); // Output: ["WEST", "WEST"]

