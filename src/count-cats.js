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
  // remove line with error and write your code here
 

  /*let columnsWithCats = [];

  let columnsCount = matrix[0].length;

  for(let i = 0; i < columnsCount; i++){
    for (let j = 0; j < matrix.length; j++){
      if (matrix[j][i] = '^^'){
        columnsWithCats.push(i);
      
      }
    }
  }*/

  
  let countCats = matrix[0].length;
  countCats.filter(i => i == '^^').length;

  console.log('result - ', countCats);
}





module.exports = {
  countCats
};

