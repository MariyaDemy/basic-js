//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *  *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds) *
 * @example *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 } *
 */


 //for a tower of n disks, there will be required 2n − 1 transfers of individual disks to shift the tower completely to another peg

function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1;
  return {turns: turns,
          seconds: Math.floor(turns / turnsSpeed * 3600),
  };
}

// const obj = calculateHanoi(9, 4308);
// console.log(obj);

module.exports = {
  calculateHanoi
};
