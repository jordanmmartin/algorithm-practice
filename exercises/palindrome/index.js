// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution using .every() array helper
// which does a boolean check on every elem in arr
//if any iteration returns false, then will return false
//not best solution because only need to check up to halfway
function palindrome(str) {
  //first arg passed into .every is the elem of arr
  //seconde is the index of the elem
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  }, )
}

module.exports = palindrome;

//My first attempt solution
// function palindrome(str) {
//   let reversed = str.split('').reduce((rev, char) => char + rev, '')
//   return str === reversed
// }
