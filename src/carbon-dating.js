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

 //t = (ln(N0 / N)) / k, where k = 0.693 / HALF_LIFE_PERIOD (5730)

function dateSample(sampleActivity) {
  if(isNaN(+sampleActivity) || typeof sampleActivity !== 'string'){
    console.log('false sample')
    return false;
  } else {
    let t = (Math.log(MODERN_ACTIVITY / +sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(t);
  }
}

dateSample('1')

module.exports = {
  dateSample
};
