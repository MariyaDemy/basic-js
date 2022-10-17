//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version. *
 * @param {String} str
 * @return {String} *
 * @example
 * For aabbbc should return 2a3bc
 **/


function encodeLine(str) {
  if(str === ''){
    return '';
  } else {
    const result = [];
    let count = 1;
    if(str.length <= 0){return []};
    for(let i=0; i < str.length; i++){
      if(str[i] !== str[i+1]){
        result.push([count, str[i]])
        count =  1;
      } else {
        count++;
        }
    }

    let resultStr = result.join().replace(/[,1]/g, '');
    return resultStr;
  }
}

// encodeLine('aabbbc');

module.exports = {
  encodeLine
};
