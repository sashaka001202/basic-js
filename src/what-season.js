const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {

  try {
    if (date==null) {
        return 'Unable to determine the time of year!'
    }
  
    if (typeof date.getMonth !== 'function') {
         throw new Error("Invalid date!")
    }

    if (!(date instanceof Date)) {
        throw new Error("Invalid date!")
   }

    if (date.__proto__ === Object.prototype) {
        throw new Error("Invalid date!")
   }
   
    const MONTH = date.getMonth()
    const MONTHUTC = date.getUTCMonth()
    

    if (MONTH < 2 || MONTH == 11 || date=='winter') {
        return 'winter'
    } else if (MONTH < 5) {
        return 'spring'
    } else if (MONTH < 8) {
        return 'summer'
    } else
    {
        return 'autumn'
    }
} catch(err) {
    throw new Error("Invalid date!")

}

}

module.exports = {
  getSeason
};
