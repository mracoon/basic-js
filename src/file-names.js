const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let res = (names.length === 0 ? [] : [names[0]])
  let obj = {} //to count duplicate names
  obj[names[0]] = 0
  for (let i = 1; i < names.length; i++) { // repeat?
    if (res.indexOf(names[i]) !== -1) {
      Object.hasOwn(obj, names[i]) ? obj[names[i]] += 1 : obj[names[i]] = 1 //add or inc counter for name  
      res.push(names[i] + `(${obj[names[i]]})`)
    } else { res.push(names[i]) }
  }
  return res
}

module.exports = {
  renameFiles
};
