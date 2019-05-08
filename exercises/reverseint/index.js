// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const rev = n.toString().split('').reverse().join('')
  return parseInt(rev) * Math.sign()
  
}

module.exports = reverseInt;

// My initial solution
// function reverseInt(n) {
//   let arr = n.toString().split('')
//   if(Math.sign(n) === -1){
//     arr.shift()
//   }
//   let str = arr.reduce((rev, char) => {
//     return char + rev
//   })
//   return parseInt(str) * Math.sign(n)
// }
