// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)
  let bigger = Object.keys(aCharMap).length > Object.keys(bCharMap).length ? aCharMap : bCharMap
  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false
  }
  for(let char in aCharMap){
    if(aCharMap[char] !== bCharMap[char]){
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  const charMap = {}
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}


module.exports = anagrams;

//solution using helper function to build char maps
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//   let bigger = Object.keys(aCharMap).length > Object.keys(bCharMap).length ? aCharMap : bCharMap
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
//   }
//   for(let char in aCharMap){
//     if(aCharMap[char] !== bCharMap[char]){
//       return false
//     }
//   }
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {}
//   for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

//my initial solution
// function anagrams(stringA, stringB) {
//   let strA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   let strB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   let charsA = {}
//   let charsB = {}
//   for(let char of strA){
//     charsA[char] ? charsA[char] = charsA[char] + 1 : charsA[char] = 1
//   }
//   for(let char of strB){
//     charsB[char] ? charsB[char] = charsB[char] + 1 : charsB[char] = 1
//   }
//   let bigger = strA.length > strB.length ? charsA : charsB
//   for(let char in bigger){
//     if(charsA[char] !== charsB[char]){
//       return false
//     }
//   }
//   return true
// }
