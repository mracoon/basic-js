const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const digits = n.toString().split('')
  let numberArr = Array.from(digits)
  let res = 0
  for (let i = 0; i < digits.length; i++) {
    numberArr.splice(i, 1)

    res = Math.max(res, +numberArr.join(''))

    numberArr = Array.from(digits)
  }
  return res
}

module.exports = {
  deleteDigit
};
