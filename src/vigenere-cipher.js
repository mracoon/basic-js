const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse) {
    this.dir = !(isReverse === false)
  }

  encrypt(message, key) {
    const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    let messArr = []
    let keyArr = []
    let keyArrEnc = []
    let encrCodeArr = []
    let keyIndex = 0

    for (let i = 0; i < key.length; i++) { keyArr.push(alph.indexOf(key[i])) }

    for (let i = 0; i < message.length; i++) {
      if (alph.indexOf(message[i]) !== -1) {
        messArr.push(alph.indexOf(message[i]))
        keyArrEnc.push(keyArr[keyIndex])
        let x = alph.indexOf(message[i]) + keyArr[keyIndex]
        if (x > 25) { x = x - 26 } //сложение по модулю 26 (длина alph)
        encrCodeArr.push(alph[x])
        keyIndex += 1
      }
      else {
        messArr.push(`${message[i]}`)
        keyArrEnc.push('')
        encrCodeArr.push(`${message[i]}`)
      }

      if (keyIndex > key.length - 1) { keyIndex = 0 }
    }

    if (this.dir) { return encrCodeArr.join('') }
    else { return (encrCodeArr.reverse()).join('') }
  }

  decrypt(message, key) {
    const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase()
    key = key.toUpperCase()

    let messArr = []
    let keyArr = []
    let keyArrEnc = []
    let encrCodeArr = []
    let keyIndex = 0

    for (let i = 0; i < key.length; i++) { keyArr.push(alph.indexOf(key[i])) }

    for (let i = 0; i < message.length; i++) {
      if (alph.indexOf(message[i]) !== -1) {
        messArr.push(alph.indexOf(message[i]))
        keyArrEnc.push(keyArr[keyIndex])
        let x = alph.indexOf(message[i]) - keyArr[keyIndex]
        if (x < 0) { x = 26 + x } //вычитание  по модулю 26 (длина alph)
        encrCodeArr.push(alph[x])
        keyIndex += 1
      }
      else {
        messArr.push(`${message[i]}`)
        keyArrEnc.push('')
        encrCodeArr.push(`${message[i]}`)
      }

      if (keyIndex > key.length - 1) { keyIndex = 0 }
    }

    if (this.dir) { return encrCodeArr.join('') }
    else { return (encrCodeArr.reverse()).join('') }
  }
}

module.exports = {
  VigenereCipheringMachine
};
