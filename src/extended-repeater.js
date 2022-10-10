const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  "separator" in obj ? `${obj.separator}` : obj.separator = '+'
  "additionSeparator" in obj ? `${obj.additionSeparator}` : obj.additionSeparator = '|'
  "repeatTimes" in obj ? `${obj.repeatTimes}` : obj.repeatTimes = 1
  "additionRepeatTimes" in obj ? `${obj.additionRepeatTimes}` : obj.additionRepeatTimes = 1
  "addition" in obj ? `${obj.addition}` : obj.addition = ''
  str = `${str}`

  const newStr = str + (obj.addition + obj.additionSeparator).repeat(obj.additionRepeatTimes - 1) + obj.addition //str + additions

  return (newStr + obj.separator).repeat(obj.repeatTimes - 1) + newStr
}

module.exports = {
  repeater
};
