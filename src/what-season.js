//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * @param {Date | FakeDate} date real or fake date *
 * @returns {String} time of the year
 * @example *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 */


function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date)){ //checks if date has a Date prototype
    throw new Error('Invalid date!');
  } else {
    if(Object.getOwnPropertyNames(date).length){  //checks if obj has any properties (the real Date object has not)
      throw new Error('Invalid date!');
      return;
    }
    switch(date.getMonth()){
      case 11:
      case 0:
      case 1:
        console.log('winter')
        return 'winter';
        break;
      case 2:
      case 3:
      case 4:
        console.log('spring')
        return 'spring';
        break;
      case 5:
      case 6:
      case 7:
        console.log('summer')
        return 'summer';
        break;
      case 8:
      case 9:
      case 10:
        console.log('autumn')
        return 'autumn';
    }
  }
}

// @example
// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date' // the class tag will be '[object Date]' the same as in the real Date object
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date())); //sets Date prototype to the fakeDate

// let d = new Date(2019, 11, 22, 23, 45, 11, 500);

// getSeason(fakeDate);

module.exports = {
  getSeason
};
