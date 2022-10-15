//const { NotImplementedError } = require('../extensions/index.js');

//Given matrix where you have to find cats by ears "^^"

function countCats(matrix) {
  let earsPairs = 0;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j] === '^^'){
        earsPairs++;
      }
    }
  }
  return earsPairs;
}

// @example
// let matrix = [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, '^^',2]
//    ];
// countCats(matrix)

module.exports = {
  countCats
};