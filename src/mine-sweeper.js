const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length - 1
  const cols = matrix[0].length - 1
  let res = []
  let rowMines = []
  for (let i = 0; i < matrix.length; i++) {
    rowMines = []
    for (let j = 0; j < matrix[i].length; j++) {

      let mines = 0
      const fullMine = (i !== 0) && (j !== 0) && (i !== rows) && (j !== cols)
      const topCenterMine = (i === 0) && (j !== 0) && (j !== cols)
      const botomCenterMine = (i === rows) && (j !== 0) && (j !== cols)
      const leftCenterMine = (i !== 0) && (j === 0) && (i !== rows)
      const rightCenterMine = (i !== 0) && (i !== rows) && (j === cols)

      if (i === 0 || fullMine || topCenterMine || leftCenterMine || rightCenterMine) {
        matrix[i + 1][j] === true ? mines += 1 : 0
        if (j === 0 || fullMine || topCenterMine || leftCenterMine) {
          matrix[i][j + 1] === true ? mines += 1 : 0
          matrix[i + 1][j + 1] === true ? mines += 1 : 0
        }
        if (j === cols || fullMine || topCenterMine || rightCenterMine) {
          matrix[i][j - 1] === true ? mines += 1 : 0
          matrix[i + 1][j - 1] === true ? mines += 1 : 0
        }

      }

      if (i === rows || fullMine || botomCenterMine || leftCenterMine || rightCenterMine) {
        matrix[i - 1][j] === true ? mines += 1 : 0
        if ((j === 0 || botomCenterMine) && (!leftCenterMine)) {
          matrix[i][j + 1] === true ? mines += 1 : 0
          matrix[i - 1][j + 1] === true ? mines += 1 : 0
        }
        if ((j === cols || botomCenterMine) && (!rightCenterMine)) {
          matrix[i][j - 1] === true ? mines += 1 : 0
          matrix[i - 1][j - 1] === true ? mines += 1 : 0
        }

      }
      if (leftCenterMine) {
        matrix[i - 1][j + 1] === true ? mines += 1 : 0
      }

      if (rightCenterMine) {
        matrix[i - 1][j - 1] === true ? mines += 1 : 0
      }
      if (fullMine) {
        matrix[i - 1][j + 1] === true ? mines += 1 : 0
        matrix[i - 1][j - 1] === true ? mines += 1 : 0
      }
      rowMines.push(mines)

    }
    res.push(rowMines)
  }
  return res
}

module.exports = {
  minesweeper
};
