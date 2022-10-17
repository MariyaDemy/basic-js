//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them. *
 * @param {String} s1
 * @param {String} s2
 * @return {Number} *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function createCounterObj(str){
    const obj = {};
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
    let count = obj[ arr[i] ] ? obj[ arr[i] ] : 0; //obj[arr[i]] returns value of arr[i] key
    obj[ arr[i] ] = count + 1;
    }
    return obj;
}

function getCommonCharacterCount(str1, str2) {

let obj1 = createCounterObj(str1);
let obj2 = createCounterObj(str2);
let count = 0;

Object.keys(obj2).forEach(function(key) {
  if(obj1.hasOwnProperty(key)){
    if(this[key] < obj1[key]){
      count += this[key];
    } else {
      count += obj1[key];
    }
  }
}, obj2);

return count;
}

// getCommonCharacterCount("aabcc", "adcaa");

module.exports = {
  getCommonCharacterCount
};
