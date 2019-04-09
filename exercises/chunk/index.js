// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []
  let index = 0
  while(index < array.length) {
    chunked.push(array.slice(index, index +size))
    index += size
  }
  return chunked
}

module.exports = chunk;

//first solution
// function chunk(array, size) {
//   const chunked = []
//   for(let elem of array){
//     const last = chunked[chunked.length - 1]
//     if(!last || last.length === size){
//       chunked.push([elem])
//     } else {
//       last.push(elem)
//     }
//   }
//   return chunked
// }

//my initial attempt
// function chunk(array, size) {
//   let newArr = []
//   for(let i = 0; i < array.length; i++){
//     let chunk = []
//     if(i % size === 0){
//       console.log('DID IT')
//       newArr.push(chunk)
//       chunk = []
//       chunk.push(array[i])
//     } else {
//       chunk.push(array[i])
//     }
//   }
//   return newArr
// }
