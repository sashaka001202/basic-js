const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
    
  const NEWSTRING = []
  const NEWSTRING2 = []

  str=String(str)
 
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  const addition = String(options.addition !== undefined ? options.addition : '');
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  const additionFragment = '';


  if (additionRepeatTimes != 0 && Number.isInteger(additionRepeatTimes)) {

      NEWSTRING.push(str+addition)

      for (let index = 0; index < additionRepeatTimes-1; index++) {
          NEWSTRING.push(addition)
      }
              
  } else{
      NEWSTRING.push(str)
  }

  NEWSTRING.join(additionSeparator)
  const str2= String(NEWSTRING.join(additionSeparator))

  if (repeatTimes != 0 && Number.isInteger(repeatTimes)) {

      for (let index2 = 0; index2 < repeatTimes; index2++) {
          
          NEWSTRING2.push(str2)
         
      }

  }

  return NEWSTRING2.join(separator)
}

module.exports = {
  repeater
};
