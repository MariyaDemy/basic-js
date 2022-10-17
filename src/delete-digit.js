//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number. *
 * @param {Number} n
 * @return {Number} *
 * @example
 * For n = 152, the output should be 52 *
 */

function deleteDigit(n) {
  let numArr = (n + '').split('');
  let variants = [];

  for(let i=0;i<numArr.length;i++){
    let arr = numArr.slice(); //copy of numArr
    arr.splice(i,1); //delete one number at a time
    variants.push(parseInt(arr.join(''), 10));
  }
  return Math.max(...variants);
}

// deleteDigit(222219);

module.exports = {
  deleteDigit
};
