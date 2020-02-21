
exports.min = function min (array) {
  if(!array || !array.length) return 0
  let min = array.sort((a,b) => a - b)[0]
  return min
}

exports.max = function max (array) {
  if(!array || !array.length) return 0
  let max = array.sort((a,b) => b - a)[0]
  return max;
}

exports.avg = function avg (array) {
  if(!array || !array.length) return 0
  let sum = 0
  for(let num of array) sum+=num
      avg = sum / array.length
  return avg
}
