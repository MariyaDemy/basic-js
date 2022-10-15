//const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!sampleActivity || isNaN(+sampleActivity)){
    console.log('false sample')
    return false;
  } else {
    let activity = +sampleActivity;
    console.log(+sampleActivity, 'activity')
    console.log((Math.log(15)-Math.log(8))/1.22)
    //Math.ceil(result)
  }
}

dateSample('1')

module.exports = {
  dateSample
};
