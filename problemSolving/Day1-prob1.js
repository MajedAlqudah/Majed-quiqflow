const power =(pow)=>{
    return function(base){
        return pow**base
    }}
let square = power(2)
let cube = power(3)

console.log(square(3))  //9
console.log(cube(3))    //27