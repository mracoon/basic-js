const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  curChain: [],

  getLength() {
    return this.curChain.length
  },

  addLink(val = '') {
    this.curChain.push(`( ${val} )`)
    return this
  },


  removeLink(pos) {
    if (Number.isInteger(pos) && pos > 0 && this.curChain.length >= pos) {
      this.curChain.splice(pos - 1, 1)
    } else {
      this.curChain = []
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },

  reverseChain() {
    this.curChain.reverse()
    return this
  },

  finishChain() {
    const result = this.curChain
    this.curChain = []
    return result.join('~~')
  }

};

module.exports = {
  chainMaker
};
