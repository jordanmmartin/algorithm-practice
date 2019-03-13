// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Possible Solutions
  // 1)Return str.split('').reverse().join('')
  // 2)let reversed = ''
  // for(let character of str){
  //   reversed = character + reversed
  // }
  //return reversed
  let arr = str.split('')
  let newStr = ''
  for(i=arr.length - 1; i >= 0; i--) {
    newStr = newStr + arr[i]
  }
  return newStr
}

module.exports = reverse;
