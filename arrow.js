
// function doubleIt(num) {
//    return num * 2;
// }

// const doubleIt = function(num) {
//    return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y = 0) => x + y;
const giveEmpty = () => "empty";

const doMath = (x, y) => {
   const sum = x + y;
   const minus = x - y;
   const result = sum + minus;
   return result
}

console.log(doMath(7,5));