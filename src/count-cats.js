const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let check = 0

  for (let index = 0; index < matrix.length; index++) {
      for (let index2 = 0; index2 < matrix[index].length; index2++) {

          if (matrix[index][index2]=='^^'){
              check++;
          }
      }

  }
  return check
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
