// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Possible Solution
  // Return str.split('').reverse().join('')
  let arr = str.split('')
  let newStr = ''
  for(i=arr.length - 1; i >= 0; i--) {
    newStr = newStr + arr[i]
  }
  return newStr
}

module.exports = reverse;
