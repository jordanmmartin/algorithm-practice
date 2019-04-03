// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}
  for (let char of str){
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  console.log(charMap)

  let charsKeys = Object.keys(charMap)
  let maxChar = ''
  let maxValue = 0
  for(let i = 0; i < charsKeys.length; i++ ) {
    if(charMap[charsKeys[i]] > maxValue){
      maxChar = charsKeys[i]
      maxValue = charMap[charsKeys[i]]
    }
  }
  return maxChar
}

module.exports = maxChar;

//My first solution attempt
// function maxChar(str) {
//   let chars = {}
//   for (let char of str){
//     if (!chars[char]) {
//       chars[char] = 1
//     } else {
//       chars[char]++
//     }
//   }
//
//   let charsKeys = Object.keys(chars)
//   let maxChar = ''
//   let maxValue = 0
//   for(let i = 0; i < charsKeys.length; i++ ) {
//     if(chars[charsKeys[i]] > maxValue){
//       maxChar = charsKeys[i]
//     }
//   }
//   return maxChar
// }
