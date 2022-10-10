const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  for (let i = 0; i < domains.length; i++) {
    const subDomains = domains[i].split('.').reverse()
    let curDom = ''
    for (let j = 0; j < subDomains.length; j++) {
      console.log(subDomains[j])
      curDom += `.${subDomains[j]}`

      if (curDom in res) {
        res[curDom] += 1
      } else { res[curDom] = 1 }
      console.log(curDom)
    }


  }
  return res
}

module.exports = {
  getDNSStats
};
