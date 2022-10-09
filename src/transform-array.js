const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  //throw new NotImplementedError('Not implemented');




  try {
    if (!Array.isArray(arr)) { throw 'err' }
    const newArr = [...arr]
    const res = []
    let isDiscardNext = false
    for (let i = 0; i < newArr.length; i++) {

      switch (arr[i]) {
        case '--discard-next':
          i += 1
          isDiscardNext = true
          break

        case '--discard-prev':
          if (!isDiscardNext) { res.pop() }
          isDiscardNext = false
          break

        case '--double-next':
          isDiscardNext = false
          res.push(newArr[i + 1])
          break

        case '--double-prev':
          if (!isDiscardNext) { res.push(newArr[i - 1]) }
          isDiscardNext = false
          break

        default:
          isDiscardNext = false
          res.push(newArr[i])
          break
      }

    }
    return res.filter(el => el !== undefined)
  }
  catch (e) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }


}

module.exports = {
  transform
};
