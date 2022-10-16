//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains *
 * @param {Array} arr initial array
 * @returns {Array} transformed array *
 * @example *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 */


function transform(arr) {
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
    return;
  }

 let resultArr = arr.slice();

 for(let i=0;i<resultArr.length;){

    if(resultArr[i] === '--discard-next'){
      if (i + 1 !== resultArr.length)
        resultArr.splice(i+1,1);
        i++;
    }
    else if(resultArr[i] === '--discard-prev'){
      if (i !== 0)
        resultArr.splice(i-1,1);
      else
        i++;
    }
    else if(resultArr[i] === '--double-next'){
      if (i + 1 !== resultArr.length)
        resultArr[i] = resultArr[i + 1];
        i++;
    }
    else if(resultArr[i] === '--double-prev'){
      if (i !== 0)
        resultArr[i] = resultArr[i - 1];
        i++;
    } else {
      i++
    }
  }
  return resultArr.filter(v => v !== '--discard-next' && v !== '--discard-prev' && v !== '--double-next' && v !== '--double-prev');
}

//transform([1, 2, 3, '--discard-next', 4, 5]);
//transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]); //[1, 2, 3, 4, 5]
//transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);//[1, 2, 3, 4, 5]
//transform(['--discard-prev', 1, 2, 3])

module.exports = {
  transform
};
