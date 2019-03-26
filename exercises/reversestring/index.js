// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// My first attempt solution
// function reverse(str) {
//   let arr = str.split('')
//   let newStr = ''
//   for (i=arr.length - 1; i >= 0; i--) {
//     newStr = newStr + arr[i]
//   }
//   return newStr
// }


solution using reverse helper
function reverse(str) {
  return str.split('').reverse().join('')
}


module.exports = reverse;
